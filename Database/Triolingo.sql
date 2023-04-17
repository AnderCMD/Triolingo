-- Active: 1665463901831@@127.0.0.1@3306@triolingo

CREATE DATABASE Triolingo 
    DEFAULT CHARACTER SET = 'utf8mb4';

USE Triolingo;

CREATE TABLE Usuarios (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT ,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Fecha_Nacimiento DATE NOT NULL,
    Correo_Electronico VARCHAR(100) NOT NULL,
    Contrasena VARCHAR(100) NOT NULL,
    Clave_Escuela VARCHAR(50) NOT NULL
);
