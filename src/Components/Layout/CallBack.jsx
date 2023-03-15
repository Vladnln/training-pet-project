import React, {Component} from 'react';
import Rectangle from '../../assets/img/Vector13.png'
class CallBack extends Component {
    render() {
        return (
            <div className="callback__container">
                <div className="callback__heading">
                    <img className="callback__rect" src={Rectangle} alt=""/>
                    <img className="callback__rect1" src={Rectangle} alt=""/>
                    <h1 className="callback__title">Lorem Ipsum is simply dummy.</h1>
                    <p className="callback__subtitle">Countary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                </div>
                <form className="callback__form-wrapper">
                    <input className="callback__input" type="text" placeholder="Enter Email Adress"/>
                    <button className="callback__button">→</button>
                </form>
            </div>
        );
    }
}

export default CallBack;