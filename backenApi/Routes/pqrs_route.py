from flask import Blueprint
from backenApi.Controllers.pqrs_controller import crear_pqrs

pqrs_bp = Blueprint('pqrs',__name__)
pqrs_bp.route('/crear_pqrs',methods=['POST'])(crear_pqrs)
# pqrs_bp.route('/traer_pqrs')(traer_pqrs)