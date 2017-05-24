import React, { Component } from 'react';
import {Header} from './Header';
import {ItemsBar} from './ItemsBar';
import {Footer} from './Footer';

export class Java extends Component {

    render(){
        let estilo = {
            "fontWeight": 'bold'
        };
        return (
            <div>
                <link rel="stylesheet" href="assets/css/java.css"/>
                <Header/>
                <ItemsBar/>
                <div className="container post">
                    <div className="jumbotron">
                        <h2 style={estilo}>Administracion de Reclamos</h2>
                        <p>Aplicación desktop que se conecta a una instancia de SQLServer. Utilización de patrones Observer, DAO, VO, MVC, Actor-Role</p>
                        <p><a className="btn btn-default" role="button" href="#">View code</a></p>
                    </div>
                    <div className="jumbotron">
                        <h2 style={estilo}>Estacionamiento </h2>
                        <p>Aplicación desktop sencilla. Mi primer programa en este lenguaje, no tiene conexion a una instancia de base de datos por lo que lo datos son manejados solamente en caché</p>
                        <p><a className="btn btn-default" role="button" href="#">view code</a></p>
                    </div>
                    <div className="jumbotron">
                        <h2 style={estilo}>Algoritmo de Dijkstra</h2>
                        <p>El famoso algoritmo de dijkstra, hecho en java mediante el uso de interfaces, con grafos, pilas y colas</p>
                        <p><a className="btn btn-default" role="button" href="#">view code</a></p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}