import React, { Component } from "react";
import Logo from "../../assets/img/Logo.png";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footer__container">
					<img src={Logo} alt="" />
					<p className="footer__title">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
				</div>
			</div>
		);
	}
}

export default Footer;
