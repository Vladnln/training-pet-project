import React, {Component} from 'react';
import Group from '..//..//assets/img/Group487.png'
import Icon1 from '..//..//assets/icons/Group383.png'
import Icon2 from '..//..//assets/icons/Group384.png'
class Stats extends Component {
    render() {
        return (
            <div>
                <div className="stats__wrapper">
                    <div className="stats__img">
                        <img src={Group} alt=""/>
                    </div>
                    <div className="stats__description">
                        <p className="title">lorem ipsum dolor</p>
                        <h1 className="main__title stats__main__title"><span>Two</span> Saas are better <span>than one.</span> </h1>
                        <p className="main__subtitle main__stats__subtitle">One of the most fundamental ways to go about that is to create a memorable <span>e-commerce</span> slogan.</p>
                        <div className="stats__marks-wrapper">
                            <div className="stats__marks">
                                <img src={Icon1} alt=""/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </div>
                            <div className="stats__marks">
                                <img src={Icon2} alt=""/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </div>
                            <div className="stats__marks">
                                <img src={Icon1} alt=""/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Stats;