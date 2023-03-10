import React, {Component, useState} from 'react';
import Image from "../../assets/img/Group463.png"
import Arrow from "../../assets/icons/AccordArrow.svg"
class Graphics extends Component {
    render() {
        return (
            <div>
                <div className="graphics__wrapper">
                    <div className="graphics__description">
                        <p className="title">Lorem ipsum dolor</p>
                        <h1 className="main__title graphics__title"> <span>With a name like Saas,</span>  it has to be good.</h1>
                        <div className="accordion__wrapper">
                            <div className="accordion__header">
                                Review the facts Saas is the best?
                                <div className="accordion__header-img">
                                    <img className="accordion__arrow" src={Arrow} alt=""/>
                                </div>
                            </div>
                            <div className="accordion__body">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod tempor.
                            </div>
                        </div>
                    </div>
                    <div className="graphics__img">
                        <img src={Image} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Graphics;
