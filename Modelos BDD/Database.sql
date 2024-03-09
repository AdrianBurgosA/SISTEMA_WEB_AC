/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     3/8/2024 4:28:34 PM                          */
/*==============================================================*/


drop table if exists CLIENTE;

drop table if exists EMPLEADO;

drop table if exists ESTADO;

drop table if exists ROL;

drop table if exists TICKET;

drop table if exists TRAMITE;

drop table if exists USUARIO;

/*==============================================================*/
/* Table: CLIENTE                                               */
/*==============================================================*/
create table CLIENTE
(
   CEDULACLI            varchar(10) not null,
   NOMBRE               varchar(50),
   APELLIDO             varchar(50),
   FECHANAC             datetime,
   TELEFONO             char(10),
   primary key (CEDULACLI)
);

/*==============================================================*/
/* Table: EMPLEADO                                              */
/*==============================================================*/
create table EMPLEADO
(
   CEDULA               varchar(10) not null,
   NOMBRE               varchar(50),
   APELLIDO             varchar(50),
   FECHANAC             datetime,
   primary key (CEDULA)
);

/*==============================================================*/
/* Table: ESTADO                                                */
/*==============================================================*/
create table ESTADO
(
   IDESTADO             int not null,
   NOMBRE               varchar(50),
   primary key (IDESTADO)
);

/*==============================================================*/
/* Table: ROL                                                   */
/*==============================================================*/
create table ROL
(
   IDROL                int not null,
   NOMBRE               varchar(50),
   primary key (IDROL)
);

/*==============================================================*/
/* Table: TICKET                                                */
/*==============================================================*/
create table TICKET
(
   IDTICKET             int not null,
   ID                   int not null,
   IDTRAMITE            int not null,
   IDESTADO             int not null,
   CEDULACLI            varchar(10) not null,
   FECHA                varchar(20),
   primary key (IDTICKET)
);

/*==============================================================*/
/* Table: TRAMITE                                               */
/*==============================================================*/
create table TRAMITE
(
   IDTRAMITE            int not null,
   NOMBRE               varchar(50),
   primary key (IDTRAMITE)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   ID                   int not null,
   CEDULA               varchar(10) not null,
   IDROL                int not null,
   USERNAME             varchar(50),
   PASSWORD             varchar(50),
   primary key (ID)
);

alter table TICKET add constraint FK_CONTIENE foreign key (IDESTADO)
      references ESTADO (IDESTADO) on delete restrict on update restrict;

alter table TICKET add constraint FK_GENERA foreign key (ID)
      references USUARIO (ID) on delete restrict on update restrict;

alter table TICKET add constraint FK_PERTENECE foreign key (CEDULACLI)
      references CLIENTE (CEDULACLI) on delete restrict on update restrict;

alter table TICKET add constraint FK_TIENE3 foreign key (IDTRAMITE)
      references TRAMITE (IDTRAMITE) on delete restrict on update restrict;

alter table USUARIO add constraint FK_TIENE2 foreign key (IDROL)
      references ROL (IDROL) on delete restrict on update restrict;

alter table USUARIO add constraint FK_TIENE4 foreign key (CEDULA)
      references EMPLEADO (CEDULA) on delete restrict on update restrict;

