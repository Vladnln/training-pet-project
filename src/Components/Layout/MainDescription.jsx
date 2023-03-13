import React, {Component} from 'react';
import '../../App.css'
import Arrow1 from '../../assets/icons/Arrow1.png'
import MainPicture from '..//..//assets/img/MainPicture.png'
class MainDescription extends Component {
    render() {
        return (
            <div>
                <section className="main">
                    <div className="main__wrapper">
                        <div className="main__description">
                            <p className="title">lorem ipsum dolor</p>
                            <h1 className="main__title">Always The <span className="main__title underline">Real</span> Thing, Always <span>Saas</span></h1>
                            <p className="main__subtitle">And that number is growing every day. That means <span>e-commerce</span>  is thriving.</p>
                            <div className="main__buttons">
                                <button>try for free</button>
                                <button>try for free</button>
                            </div>
                            <div className="main__quote">
                                There are some things money can’t buy. For everything else there’s ‘’<span>MasterCard</span>” is a good example.
                                <img src={Arrow1} alt=""/>
                            </div>
                        </div>
                        <div className="main__picture"><img src={MainPicture}/></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MainDescription;