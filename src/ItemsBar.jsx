import React, { Component } from 'react';
import {Link} from 'react-router';

export class ItemsBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    showModal(){
        this.setState({
            showModal: true
        });
    }

    closeModal(){
       this.setState({
           showModal: false
       });
    }

    render(){
        let style1 = {
            "padding": '10px',
            "borderRadius": '5%',
            "border": '3px solid darkgrey',
            "backgroundColor": '#EAE7CC'
        };
        let color = {
            "color": 'red'
        };
        let iconSize = {
            "fontSize": '30px',
            "color": '#D5D826'
        };

        const self = this;

        document.addEventListener('keydown', (event) => {
            if(event.keyCode == '27' && self.state.showModal){
                // Tecla esc
                self.closeModal();
            }
        });
        return(
            <ul className="nav nav-pills categories">
                <li><a className="categoria proyectos" href="#">Introduction </a></li>
                <li><Link className="categoria proyectos" to="Java">Java </Link></li>
                <li><a className="categoria proyectos" onClick={this.showModal}>C# </a></li>
                <li><Link className="categoria proyectos" to="Web">WEB</Link></li>
                <li><a className="categoria proyectos" onClick={this.showModal}>Android </a></li>
                <div id="myModal" style={{'display': this.state.showModal? 'block' : 'none'}} className="modal" onClick={() => {this.closeModal();}}>
                    <div id="realModal" className="modal-content" style={style1} onClick={(e) => e.stopPropagation()}>
                        <span style={color} className="close" onClick={() => {this.closeModal();}}>&times;</span>
                        <i className="fa fa-exclamation-triangle" aria-hidden="true" style={iconSize}/>
                        <p className="pModal1"><strong>Construction in progress</strong></p>
                        <p className="pModal1"><strong>Thanks for your patience</strong></p>
                    </div>
                </div>
            </ul>
        );
    }
}