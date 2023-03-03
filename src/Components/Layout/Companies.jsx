import React, {Component} from 'react';
import '..//..//App.css'
import Amazon from '..//..//assets/img/Amazon.png'
import Fedex from '..//..//assets/img/Fedex.png'
import Fedx from '..//..//assets/img/Fedx.png'
import Google from '..//..//assets/img/Google (.png'
import Microsoft from '..//..//assets/img/Microsoft.png'
class Companies extends Component {
    render() {
        return (
            <div className="comp__wrapper">
                <div className="companies">
                    <img src={Fedx} alt=""/>
                    <img src={Amazon} alt=""/>
                    <img src={Fedex} alt=""/>
                    <img src={Google} alt=""/>
                    <img src={Microsoft} alt=""/>
                </div>
            </div>
        );
    }
}

export default Companies;