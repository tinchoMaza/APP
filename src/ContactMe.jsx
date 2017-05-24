import React, { Component } from 'react';
import {Header} from './Header';
import {Footer} from './Footer';


export class ContactMe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "cambiarImagen": false
        };


        this.handleImagen = this.handleImagen.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleImagen(){
        if(this.state.cambiarImagen)
            this.setState({
                cambiarImagen: false
            });
        else
            this.setState({
                cambiarImagen: true
            });
    }

    showModal(){
        document.getElementById('myModal').style.display = "block";
    }

    closeModal(){
        document.getElementById('myModal').style.display = "none";
    }


    render(){
        let style = {};
        let style2 = {};
        let style3 = {
          "text-align": 'right',
            "font-size": '13px'
        };
        if (this.state.cambiarImagen) {
            style = {
                visibility: 'hidden',
                disabled: 'true'
            };
            style2 = {
                visiblity: 'visible',
                disabled: 'false'
            };
        } else {
            style = {
                visibility: 'visible',
                disabled: 'false'
            };
            style2 = {
                visibility: 'hidden',
                disabled: 'true'
            };
        }

        return (
            <div>
                <link rel="stylesheet" href="assets/css/ContactMe.css"/>
                    <div className="jumbotron hero">
                        <Header/>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-md-push-7 phone-preview">
                                    <div className="iphone-mockup"><img src="assets/img/iphone.svg" className="device"/>
                                        <div className="screen"><button className="foton iphone transparente" onClick={this.handleImagen} style={style} title="Click to get my number"><img className="img-circle img-responsive" src="./assets/img/onoff.png" alt="ON/OFF" width="150" style={style}/></button>
                                            <button className="foton iphone transparente numero" onClick={this.handleImagen} style={style2} title="Click to turn off the phone"><img className="number-img img-responsive" src="./assets/img/number.jpg" alt="My Number" style={style2}/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-md-pull-3 get-it">
                                    <h1>Contact me at anytime</h1>
                                    <a className="btn btn-primary btn-lg" role="button" href="#"><span className="fa fa-facebook-official"/> FACEBOOK</a>
                                        <a className="btn btn-success btn-lg" role="button" href="#"><span className="fa fa-github"/> GITHUB</a>
                                        <a className="btn btn-warning btn-lg" role="button" onClick={this.showModal}><span className="fa fa-envelope-o"/> MAIL</a>
                                        <div id="myModal" className="modal">
                                            <div className="modal-content">
                                                <span className="close" onClick={this.closeModal}>&times;</span>
                                                <p>My Mail: mazagatti.martin@gmail.com</p>
                                                <p>Thanks for contacting me</p>
                                                <p style={style3}>Click on the red cross to close ↑</p>
                                            </div>
                                        </div>
                                        <a className="btn btn-info btn-lg" role="button" href="#"><span className="fa fa-twitter"/> Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </div>
        );
    }
}