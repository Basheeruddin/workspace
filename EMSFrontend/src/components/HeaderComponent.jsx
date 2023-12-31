import logo from '/img/logo_dark.png'

const HeaderComponent = () => {

    return (
        // <!-- header start-->
			<header className="header header--front_2">
				<div className="container-fluid">
					<div className="row no-gutters justify-content-between">
						<div className="col-auto d-flex align-items-center">
							<div className="dropdown-trigger d-none d-sm-block">
								<div className="dropdown-trigger__item"></div>
							</div>
							<div className="header-logo"><a className="header-logo__link" href="index.html">
								{/* <img className="header-logo__img" src={logo} alt="logo"/> */}
								<img className="header-logo__img" src="/img/logo_dark.png" alt="logo"/>
								{/* <img className="header-logo__img" src={"../img/logo_dark.png"} alt="logo"/> */}
								{/* <img src={require('../img/logo_dark.png').default} /> */}
								</a></div>
						</div>
						<div className="col-auto">
							{/* <!-- main menu start--> */}
							<nav>
								<ul className="main-menu">
									<li className="main-menu__item main-menu__item--has-child main-menu__item--active"><a className="main-menu__link" href="#!"><span>Home</span></a>
									</li>
									<li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="#!"><span>About Us</span></a>
											{/* <!-- sub menu start--> */}
								<ul className="main-menu__sub-list">
								<li><a href="about.html"><span>Vision & Mission</span></a></li>
								<li><a href="#!"><span>Advisory Board</span></a></li>
								<li><a href="executiveCommittee.html"><span>Executive Committee</span></a></li>											
											</ul>
											{/* <!-- sub menu end--> */}
									</li>
									<li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="#!"><span>Membership</span></a>
										{/* <!-- sub menu start--> */}
									<ul className="main-menu__sub-list">
										<li><a href="membershipBenefit.html"><span>Member Benefits</span></a></li>
										<li><a href="member.html"><span>Become a Member</span></a></li>
									</ul>
										{/* <!-- sub menu end--> */}
									</li>
									<li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="#!"><span>Sponsors</span></a></li>
									<li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="#!"><span>Events</span></a>
									{/* <!-- sub menu start--> */}
									<ul className="main-menu__sub-list">
										<li><a href="upcomingEvents.html"><span>Upcoming Events</span></a></li>
										<li><a href="pastEvents.html"><span>Past Events</span></a></li>
									</ul>
									{/* <!-- sub menu end--> */}
									</li>
									<li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="#!"><span>Contact us</span></a>
										
									</li>
								</ul>
							</nav>
							{/* <!-- main menu end--> */}
						</div>
						<div className="col-auto d-flex align-items-center">
							{/* <!-- lang select start--> */}
							
							{/* <!-- lang select end--> */}
                            <a className="button button--squared" href="#"  data-fancybox data-src="#dialog-content" data-touch="false"><span>Login</span></a>
							<div className="dropdown-trigger d-block d-sm-none">
								<div className="dropdown-trigger__item"></div>
							</div>
						</div>
					</div>
				</div>
			</header>
    )
}

export default HeaderComponent;