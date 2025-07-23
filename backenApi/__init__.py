from flask import Flask
from backenApi.Routes.pqrs_route import pqrs_bp

def crear_app():
    app = Flask(__file__)
    app.register_blueprint(pqrs_bp)
    return app