import React, {Component} from 'react';
import SubscriptionCards from "./SubscriptionCards.jsx";

class Subscription extends Component {
    render() {
        return (
            <div className="subscription__container">
                <div className="subscription__heading">
                    <h1 className="main__title subscription__title">Keep calm and buy</h1>
                    <p className="subscription__subtitle">With lowering the price to even a slight extent one can achieve exponential growth.</p>
                </div>
                <SubscriptionCards/>
            </div>
        );
    }
}

export default Subscription;