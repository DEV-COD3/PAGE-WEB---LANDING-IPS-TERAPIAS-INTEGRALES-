drop database if exists PQRS_WEB;
create database PQRS_WEB;
use PQRS_WEB;

create table tipos_persona(
    id int primary key,
    tipo varchar(30)
);

create table tipos_solicitud(
    id int primary key not null,
    tipo varchar(40)
    );
create table programas_atencion(
    id int primary key,
    programa varchar(50)
);
create table clasificaciones_pqrs(
    id int primary key,
    clasificacion varchar(40)
);

create table tipos_documento(
    id int primary key not null,
    tipo varchar (40)
    );
create table PQRS(
    id int primary key,
    fecha_solicitud date,
    consecutivo_solicitud varchar(30),
    tipo_solicitud int,
    tipo_persona int,
    programa_atencion int,
    tipo_documento int,
    celular varchar(35),
    telefono varchar(30),
    clasificacion int,
    correo_electronico varchar(100),
    documento_identidad varchar(15),
    nombre_completo varchar(80),
    detalle text,
    Foreign Key (tipo_solicitud) references tipos_solicitud (id),
    Foreign Key (tipo_persona) references tipos_persona (id),
    Foreign Key (programa_atencion) references programas_atencion (id),
    Foreign Key (tipo_documento) references tipos_documento (id),
    Foreign Key (clasificacion) references clasificaciones_pqrs(id)

);
create table metadata_autorizacionXPQRS(
    PQRS_id int,
    ip_aceptacion varchar(30),
    navegador_aceptacion varchar(30),
    Foreign key (PQRS_id) references PQRS (id)
);


insert into tipos_persona(id, tipo) values (1,'Juridica'),(2,'Natural'),(3,'Otro');
insert into tipos_solicitud(id, tipo) values (1,'Peticion'),(2,'Queja'),(3,'Reclamo'),(4,'Sugerencia');
insert into programas_atencion(id,programa) values (1,'Agudos'),(2,'Permanentes'),(3,"Clinica Heridas"),(4,"Maternas"),(5,"Atencion Medicos Profesionales");
insert into clasificaciones_pqrs(id, clasificacion) values (1, 'Calidad'),(2,'Oportunidad'),(3,'Profesional'),(4,'Otro');
insert into tipos_documento (id,tipo) values (1,'CedulaCiudadania'),(2,'TarjetaIdentidad'),(3,'RegistroCivil'),(4,'CedulaExtranjeria'),(5,'Pasaporte');



