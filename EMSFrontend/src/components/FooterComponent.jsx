import React from 'react'

const FooterComponent = () => {
  return (
    // <!-- footer front_2 start-->
			<footer className="footer footer--front_2">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-lg-4">
							<div className="footer-logo"><a className="footer-logo__link" href="index.html"><img className="footer-logo__img" src="img/logo_white.png" alt="logo"/></a></div>
							<div className="footer-contacts">
								<p className="footer-contacts__address">Bankruptcy Division P.O. Box 530. Columbus, OH</p>
								<p className="footer-contacts__phone">Phone: <a href="tel:+31859644725">+ 1800 - 123 456 78</a></p>
								<p className="footer-contacts__mail">Email: <a href="mailto:support@helpo.org">president@apcotelugu.org</a></p>
							</div>
							{/* <!-- footer socials start--> */}
							<ul className="footer-socials">
								<li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
								<li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							</ul>
							{/* <!-- footer socials end--> */}
						</div>
						<div className="col-sm-6 col-lg-4 col-xl-3 offset-xl-1">
							<h6 className="footer__title">Menu & Links</h6>
							{/* <!-- footer nav start--> */}
							<nav>
								<ul className="footer-menu">
									<li className="footer-menu__item"><a className="footer-menu__link" href="index.html">Home Page</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="sponsar.html">sponsors</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="about.html">About Us</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="contact.html">Contact Us</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="javascript:void(0);">Events</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="member.html">Membership</a></li>
								</ul>
							</nav>
							{/* <!-- footer nav end--> */}
						</div>
						<div className="col-lg-4 col-xl-3 offset-xl-1">
							<h6 className="footer__title">Newsletter</h6>
							<div className="footer__form">
								<input className="footer__form-input" type="email" placeholder="Enter your E-mail"/>
								<button className="footer__form-submit button button--primary" type="submit">Subscribe</button>
							</div>
						</div>
					</div>
					<div className="row align-items-baseline">
						<div className="col-md-6">
							<p className="footer-copyright">© 2023 APCO. All Right Reserved</p>
						</div>
						<div className="col-md-6">
							<div className="footer-privacy"><a className="footer-privacy__link" href="#">Privacy Policy</a><span className="footer-privacy__divider">|</span><a className="footer-privacy__link" href="#">Term and Condision</a></div>
						</div>
					</div>
				</div>
			</footer>
  )
}

export default FooterComponent