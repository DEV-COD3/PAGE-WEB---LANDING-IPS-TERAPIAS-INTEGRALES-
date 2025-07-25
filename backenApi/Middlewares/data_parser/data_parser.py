from backenApi.APIs.db_pqrs import Conexion_pqrs
conn=Conexion_pqrs()

def parse_dataid_to_realdata(raw_json):
    print(raw_json)
    real_doc_type, doc_type_bool=conn.obtener_tipo_documento(raw_json["cliente"]["documento"]["tipo"])
    print("1")
    real_person_type, person_type_bool = conn.obtener_tipo_persona(raw_json["cliente"]["tipo_persona"])
    print("2")
    real_request_type, request_type_bool= conn.obtener_tipo_solicitud(raw_json["solicitud"]["tipo"])
    print("3")
    real_atenttion_type, atenttion_type_bool= conn.obtener_programa_atencion(raw_json["solicitud"]["programa"])
    print("4")
    raw_json["cliente"]["documento"]["tipo"]=real_doc_type
    raw_json["cliente"]["tipo_persona"]=real_person_type
    raw_json["solicitud"]["tipo"]=real_request_type
    raw_json["solicitud"]["programa"]=real_atenttion_type

    return raw_json
