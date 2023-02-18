from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_cors import CORS, cross_origin
from model import db, User
from config import ApplicationConfig

app = Flask(__name__)
CORS(app)
app.config.from_object(ApplicationConfig)
bcrypt = Bcrypt(app)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()


# @app.route("/register", methods=["POST"])
# def register():
#     username = request.json["username"]
#     password = request.json["pass"]

#     hashed_pass = bcrypt.generate_password_hash(password)
#     new_user = User(username=username, password=hashed_pass)
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({
#         "id": new_user.id,
#         "username": new_user.username
#     })

@app.route("/adminlogin", methods=["POST"])
def login():
    loginUsername = request.json["username"]
    loginPassword = request.json["pass"]

    user = User.query.filter_by(username=loginUsername).first()

    if user is None:
        return jsonify({"error": "incorrect username"})

    if not bcrypt.check_password_hash(user.password, loginPassword):
        return jsonify({"error": "incorrect username"})

    session["user_id"] = user.id

    return jsonify({
        "login": "success"
    })

@app.route("/admin")
def admin_page():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"admin": False})
    
    user = User.query.filter_by(id=user_id).first()

    return jsonify({
        "admin": True
    })


if __name__ == "__main__":
    app.run(debug=True)
