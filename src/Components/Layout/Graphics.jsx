import React, {Component, useState} from 'react';
import Image from "../../assets/img/Group463.png"
import Arrow from "../../assets/icons/AccordArrow.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
class Graphics extends Component {
    render() {
        return (
            <div>
                <div className="graphics__wrapper">
                    <div className="graphics__description">
                        <p className="title">Lorem ipsum dolor</p>
                        <h1 className="main__title graphics__title"> <span>With a name like Saas,</span>  it has to be good.</h1>
                        <Accordion>
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    Review the facts Saas is the best?
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod tempor.
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
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
