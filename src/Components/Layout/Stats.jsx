import React, {Component} from 'react';
import Group from '..//..//assets/img/Group487.png'
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
                        <p className="main__subtitle main__stats__subtitle">One of the most fundamental ways to go about that is to create a memorable e-commerce slogan.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Stats;