import React, {Component} from 'react';

class SubscriptionCards extends Component {
    render() {
        return (
            <div className="subscription__cards-container">
                <div className="subscription__card-wrapper">
                    <h1 className="card__title subscription__card-title">STUDENT</h1>
                    <p className="card__description subscription__card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <h1 className="subscription__card-price">$15</h1>
                    <div>
                        <button className="subscription__buttons">
                            <button className="subscription__button">Monthiy</button>
                            <button className="subscription__button">Annually</button>

                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default SubscriptionCards;