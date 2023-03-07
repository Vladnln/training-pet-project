import React, {Component} from 'react';
import Image from "../../assets/img/Group463.png"
class Graphics extends Component {
    render() {
        return (
            <div>
                <div className="graphics__wrapper">
                    <div className="graphics__description">
                        <p className="title">Lorem ipsum dolor</p>
                        <h1 className="main__title graphics__title"> <span>With a name like Saas,</span>  it has to be good.</h1>
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