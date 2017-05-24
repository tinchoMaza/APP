import React, { Component } from 'react';
import {Link} from 'react-router';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button><a className="navbar-brand navbar-link" href="#" title="Home"><span className="glyphicon glyphicon-star"/><span className="text-muted text-title">MAZA</span></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="presentation pepe custom"><Link href="#">Ideas </Link></li>
                                <li className="presentation pepe custom"><a href="../assets/files/asd.txt" download="Curriculum" title="Download PDF">CV </a></li>
                                <li className="presentation pepe custom"><Link to="ContactMe">Contact me</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}