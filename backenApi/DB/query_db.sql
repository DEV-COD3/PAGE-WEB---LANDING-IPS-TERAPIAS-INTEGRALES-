drop database if exists PQRS_WEB;
use PQRS_WEB;

create table tipo_persona(
    id int primary key,
    tipo varchar(30)
);

create table tipo_solicitudes(
    id int primary key not null,
    tipo varchar(40)
    );
create table programa_atencion(
    id int primary key,
    programa varchar(50)
);
create table clasificacion_pqrs(
    id int primary key,
    clasificacion varchar(40)
);

create table tipo_documentos(
    id int primary key not null,
    tipo varchar (40)
    );
create table PQRS(
    id int primary key,
    fecha_solicitud date,
    consecutivo_solicitud varchar(30)
    tipo_solicitud int,
    tipo_documento int,
    celular varchar(35),
    telefono varchar(30)
    correo_electronico varchar(100),
    documento_identidad varchar(15),
    nombre_completo varchar(80),
    detalle text
);
create table metadata_autorizacionXPQRS(
    PQRS_id int,
    ip_aceptacion varchar(30),
    navegador_aceptacion varchar(30),
)


insert into tipo_solicitudes(id, tipo) values (1,'Peticion'),(2,'Queja'),(3,'Reclamo'),(4,'Sugerencia');
insert into tipo_documentos (id,tipo) values (1,'CedulaCiudadania'),(2,'TarjetaIdentidad'),(3,'RegistroCivil'),(4,'CedulaExtranjeria'),(5,'Pasaporte');
insert into clasificacion(id, clasificacion) values (1, 'Calidad'),(2,'Oportunidad'),(3,'Profesional'),(4,'Otro');

