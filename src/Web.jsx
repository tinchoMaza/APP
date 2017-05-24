import React, { Component } from 'react';
import {Header} from './Header';
import {ItemsBar} from './ItemsBar';
import {Footer} from './Footer';

export class Web extends Component {

    render(){
        let estilo = {
            "fontWeight": 'bold'
        };
        return (
            <div>
                <link rel="stylesheet" href="assets/css/web.css"/>
                <Header/>
                <ItemsBar/>
                <div className="container post">
                    <div className="jumbotron">
                        <h2 style={estilo}>Pokedex</h2>
                        <p>Pagina web utilizando React, html, css, javascript, jsx que se conecta a una api que permite la consulta de pokemones</p>
                        <p><a className="btn btn-default" role="button" href="#">View code</a>&ensp;
                            <a className="btn btn-default" role="button" href="#">View demo</a>
                        </p>
                    </div>
                    <div className="jumbotron">
                        <h2 style={estilo}>Seleccion de imagen</h2>
                        <p>Clickeá sobre la imagen y se iluminará el sector seleccionado. Se aplica teorema de pitágoras. Uso de React</p>
                        <p><a className="btn btn-default" role="button" href="#">view code</a>&ensp;
                            <a className="btn btn-default" role="button" href="#">View demo</a>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}