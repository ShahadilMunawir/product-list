from flask import Flask, request, jsonify, session, send_file
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_cors import CORS, cross_origin
from model import db, User, Products
from config import ApplicationConfig
from datetime import datetime
import sqlite3
import os

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


@app.route("/uploadData", methods=["POST"])
def get_product_data():
    productName = request.form["productName"]
    downloadLink = request.form["url"]
    image = request.files["image"]
    filename_split = image.filename.split(".")
    extention = filename_split[len(filename_split)-1]
    for_image_path = str(datetime.now().timestamp()).replace(".", "")

    # image.save(f"uploads/{for_image_path}.{extention}")
    # imagePath = f"uploads/{for_image_path}"

    # new_product = Products(product_name=productName, download_link=downloadLink, image_path=imagePath)
    # db.session.add(new_product)
    # db.session.commit()
    lol = Products.query.all()
    print(dict(lol))
    return for_image_path

@app.route("/adminlogin", methods=["POST"])
def login():
    loginUsername = request.json["username"]
    loginPassword = request.json["pass"]

    user = User.query.filter_by(username=loginUsername).first()

    if user is None:
        return jsonify({"login": "failed", "error": "incorrect username"})

    if not bcrypt.check_password_hash(user.password, loginPassword):
        return jsonify({"login": "failed", "error": "incorrect username"})

    session["user_id"] = user.id

    return jsonify({
        "login": "success"
    })

@app.route("/imagesretrive/<filename>")
def files(filename):
    return send_file(f"uploads/{filename}")

@app.route("/admin")
def admin_page():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"admin": False})
    
    user = User.query.filter_by(id=user_id).first()

    return jsonify({
        "admin": True
    })

@app.route("/get_products")
def get_products():
    cur = sqlite3.connect("db.sqlite").cursor()
    cur.execute('''SELECT * FROM products''')
    row_headers=[x[0] for x in cur.description]
    rows = cur.fetchall()
    json_data=[]
    for row in rows:
        json_data.append(dict(zip(row_headers,row)))

    return json.dumps(json_data)


if __name__ == "__main__":
    app.run(debug=True)
