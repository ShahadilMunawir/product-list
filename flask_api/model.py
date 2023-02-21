from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "admin"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid())
    username = db.Column(db.String(300), unique=True)
    password = db.Column(db.Text, nullable=False)

class Products(db.Model):
    __tablename__ = "products"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid())
    product_name = db.Column(db.String(100), unique=True, nullable=False)
    download_link = db.Column(db.Text, nullable=False)
    image_path = db.Column(db.String(400), nullable=True)