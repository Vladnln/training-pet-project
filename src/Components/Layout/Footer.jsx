import React, { Component } from "react";
import Logo from "../../assets/img/Logo.png";
import FacebookLogo from "../../assets/icons/Facebook.png";
import TwitterLogo from "../../assets/icons/Twitter.png";
import LinkedInLogo from "../../assets/icons/LinkedIn.png";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footer__container">
					<div className="footer__head">
						<img src={Logo} alt="" />
						<p className="footer__title">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
					</div>
					<div className="footer__info">
						<div className="footer__heading">
							<h1 className="footer__desc-title">Customers</h1>
							<a href="" className="footer__desc-links">
								Buyer
							</a>
							<a href="" className="footer__desc-links">
								Supplier
							</a>
						</div>
						<div className="footer__heading">
							<h1 className="footer__desc-title">Company</h1>
							<a href="" className="footer__desc-links">
								About Us
							</a>
							<a href="" className="footer__desc-links">
								Careers
							</a>
							<a href="" className="footer__desc-links">
								Contact Us
							</a>
						</div>
						<div className="footer__heading">
							<h1 className="footer__desc-title">Further Information</h1>
							<a href="" className="footer__desc-links">
								Terms & Conditions
							</a>
							<a href="" className="footer__desc-links">
								Privacy Policy
							</a>
						</div>
						<div className="footer__heading">
							<h1 className="footer__desc-title">Follow Us</h1>
							<input type="text" className="footer__input" placeholder="Email Address" />
							<div className="footer__icons">
								<img src={FacebookLogo} alt="" />
								<img src={TwitterLogo} alt="" />
								<img src={LinkedInLogo} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
