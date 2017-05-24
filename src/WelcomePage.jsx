import React, { Component } from 'react';
import {Header} from './Header';
import {ItemsBar} from './ItemsBar';
import {Footer} from './Footer';


export class Principal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <Header/>
            <ItemsBar/>
            <div className="container post">
                <div className="row">
                    <div className="col-md-6 post-title">
                        <h1 className="bg-success">MARTIN SEBASTIAN MAZAGATTI</h1>
                        <p className="author"><strong>"Stay Hungry, stay foolish"</strong> <span className="text-muted">Steve Jobs</span></p>
                    </div>
                    <div className="col-md-6 col-md-offset-0 post-body">
                        <p className="bg-warning">Argentino, apasionado de la tecnología y de los videojuegos. Estudiante de Ingenieria Informartica en la Universidad Argetina de la Empresa. Lenguajes de programación conocidos: Java, C#, HTML, CSS, Javascript y Android. Utilizo frameworks
                            como React, Bootstrap y librerías como Font Awesome en Web UI; Java Swing y Java FX en desarrollo para escritorio. </p>
                        <p className="bg-warning">Entornos de desarrollo utilizados: Eclipse, Visual Studio, WebStorm, IntelliJ IDEA, Android Studio. Siempre busco innovar y aprender cosas nuevas.</p>
                        <p className="bg-warning">Experiencia: Pueden ver mis proyectos en las distintas secciones de esta pagina y obtener el codigo con el link a Github.</p>
                        <figure>
                            <img id="codeImage" className="img-responsive" src="../assets/img/pepe.jpg" alt="IMG NOT FOUND"/>
                            <figcaption>Loves coding ♥</figcaption>
                        </figure>
                        <p className="bg-warning">Trabajos anteriores: Pasantia en desarrollo front-end en Globant, en el sector de IAmAt durante 3 meses</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}