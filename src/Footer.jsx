import React, { Component } from 'react';

export class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <footer className="site-footer">
                <div className="container">
                    <p className="text-center">MazaVI © 2017</p>
                </div>
            </footer>
        );
    }
}