import React, { Component } from 'react';
import Checkmark from '../../assets/icons/Group325.png'
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
                    <div className="subscription__mark-list">
                        <div className="subscription__mark-list check-list">
                            <img src={Checkmark} alt="" />
                            <p className="subscription__mark-list list-title">Consulting with experts 20 times for I yea</p>
                        </div>
                        <div className="subscription__mark-list check-list">
                            <img src={Checkmark} alt="" />
                            <p className="subscription__mark-list list-title">Add friends for free for 1month</p>
                        </div>
                        <div className="subscription__mark-list check-list">
                            <img src={Checkmark} alt="" />
                            <p className="subscription__mark-list list-title">Free 5 fonts</p>
                        </div>
                    </div>
                    <button className="graphics__buttons button__order">Buy Now</button>
                </div>
            </div>
        );
    }
}

export default SubscriptionCards;