import React, {Component} from 'react';
import '../../App.css'
import Logo from "../../assets/img/Logo.png"

class Header extends Component {
    render() {
        return (
            <div className="header__wrapper">
                <div className="header">
                    <div className="HeaderLogo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="header__links">
                        <a href="#">Home</a>
                        <a href="#">Features</a>
                        <a href="#">Testimonial</a>
                        <a href="#">Pricing</a>
                        <a href="#">CTA</a>
                    </div>
                    <button className="header__button">Try Demo</button>
                </div>
            </div>
        );
    }
}

export default Header;