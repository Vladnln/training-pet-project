import React, {Component, useState} from 'react';
import Graphs from '../../assets/img/Group463.png'
import AccordionLayout from "./AccordionLayout.jsx";
class Graphics extends Component {
    render() {
        return (
            <div>
                <div className="graphics__wrapper">
                    <div className="graphics__description">
                        <p className="title">Lorem ipsum dolor</p>
                        <h1 className="main__title graphics__title"> <span>With a name like Saas,</span>  it has to be good.</h1>
                        <AccordionLayout/>
                        <div className="graphics__buttons-group">
                            <button className="graphics__buttons">free trail</button>
                            <button className="graphics__buttons">Read More</button>
                        </div>
                    </div>
                    <div>
                        <img className="graphics__img" src={Graphs} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Graphics;
