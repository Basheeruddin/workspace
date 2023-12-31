import React from 'react'

function LeftComponent() {
  return (
    
    <div className="aside-dropdown__inner"><span className="aside-dropdown__close">
					<svg className="icon">
						<use xlinkHref="#close"></use>
					</svg></span>
				<div className="aside-dropdown__item d-lg-none d-block">
					<ul className="aside-menu">
						<li className="aside-menu__item  aside-menu__item--active"><a className="aside-menu__link" href="index.html"><span>Home</span></a>
						</li>
						<li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="#!"><span>About us</span></a>
							{/* <!-- sub menu start--> */}
							<ul className="aside-menu__sub-list">
								<li><a href="about.html"><span>Vision & Mission</span></a></li>
								<li><a href="#!"><span>Advisory Board</span></a></li>
								<li><a href="executiveCommittee.html"><span>Executive Committee</span></a></li>											
							</ul>
							{/* <!-- sub menu end--> */}
						</li>
						<li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="#!"><span>Membership</span></a>
							{/* <!-- sub menu start--> */}
							<ul className="aside-menu__sub-list">
								<li><a href="membershipBenefit.html"><span>Member Benefits</span></a></li>
								<li><a href="member.html"><span>Become a Member</span></a></li>
							</ul>
							{/* <!-- sub menu end--> */}
						</li>
						<li className="aside-menu__item"><a className="aside-menu__link" href="sponsar.html"><span>Sponsors</span></a>
						</li>
						<li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="#!"><span>Events</span></a>
						{/* <!-- sub menu start--> */}
						<ul className="aside-menu__sub-list">
							<li><a href="upcomingEvents.html"><span>Upcoming Events</span></a></li>
							<li><a href="pastEvents.html"><span>Past Events</span></a></li>
						</ul>
						{/* <!-- sub menu end--> */}
						</li>
						<li className="aside-menu__item"><a className="aside-menu__link" href="contact.html"><span>Contacts us</span></a></li>
						<li className="aside-menu__item"><a className="aside-menu__link mobileLogin" href="#!"   data-fancybox data-src="#dialog-content" data-touch="false"><span>Login</span></a></li>
					</ul>
				</div>
				
				<div className="aside-dropdown__item">
					{/* <!-- aside menu start--> */}
				
					{/* <!-- aside menu end--> */}
					<div className="aside-inner"><span className="aside-inner__title">Email</span><a className="aside-inner__link" href="mailto:support@helpo.org">president@apcotelugu.org</a></div>
					<div className="aside-inner"><span className="aside-inner__title">Phone numbers</span><a className="aside-inner__link" href="tel:+180012345678">+ 1800 - 123 456 78</a><a className="aside-inner__link" href="tel:+18009756511">+ 1800 - 975 65 11</a></div>
					<ul className="aside-socials">
						<li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
						<li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
						<li className="aside-socials__item"><a className="aside-socials__link aside-socials__link--active" href="https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Ftext%3DHome%26url%3Dhttps%253A%252F%252Fapcotelugu.org%252F%2523.YiyS7HQRKGg.twitter%26related%3D"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li className="aside-socials__item"><a className="aside-socials__link" href="https://www.facebook.com/v6.0/dialog/share?redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html&display=popup&href=https%3A%2F%2Fapcotelugu.org%2F%23.YiySsauNJMI.facebook&client_id=140586622674265&ret=login#_=_"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="aside-dropdown__item"><a className="button button--squared" href="donate.html"><span>Donate</span></a></div>
				</div>
  )
}

export default LeftComponent