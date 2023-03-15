import React, {Component} from 'react';
import Vectors from '../../assets/icons/Vector.png'
import Vectors1 from '../../assets/icons/Vector-1.png'
import Vectors2 from '../../assets/icons/Vector-2.png'
import Vectors3 from '../../assets/icons/Vector-3.png'
import Vectors4 from '../../assets/icons/Vector-4.png'
import Vectors5 from '../../assets/icons/Vector-5.png'
class AbilitiesMain extends Component {
    render() {
        return (
            <div className="abilities__main-wrapper">
                    <div className="abilities__card-container">
                    <div className="abilities__card-wrapper">
                        <div className="abilities__card-img">
                            <img className="card__img" src={Vectors} alt=""/>
                        </div>
                        <p className="card__title">Responsive Layout</p>
                        <p className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="abilities__card-wrapper">
                        <div className="abilities__card-img">
                            <img className="card__img" src={Vectors2} alt=""/>
                        </div>
                        <p className="card__title">Smart BEM Grid</p>
                        <p className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="abilities__card-wrapper">
                        <div className="abilities__card-img">
                            <img className="card__img" src={Vectors5} alt=""/>
                        </div>
                        <p className="card__title">User Friendly</p>
                        <p className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="abilities__card-wrapper">
                        <div className="abilities__card-img">
                            <img className="card__img" src={Vectors1} alt=""/>
                        </div>
                        <p className="card__title">Built on Bootstrap v4</p>
                        <p className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="abilities__card-wrapper">
                        <div className="abilities__card-img">
                            <img className="card__img" src={Vectors3} alt=""/>
                        </div>
                        <p className="card__title">Best online Security</p>
                        <p className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="abilities__card-wrapper">
                        <div className="abilities__card-img">
                            <img className="card__img" src={Vectors4} alt=""/>
                        </div>
                        <p className="card__title">Creative Design</p>
                        <p className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AbilitiesMain;