import React from 'react'

const AboutUsComponent = () => {
  return (
    
    // <!-- About us start-->
				<section className="section about--front-2 background--brown" id="about">
					<div className="container">
						<div className="row">
							<div className="col-xl-4"  data-aos="fade-up">
								<div className="heading heading--primary"><span className="heading__pre-title">Venu Talasila</span>
									<h2 className="heading__title no-margin-bottom"><span>President's </span> <span>Message</span></h2>
								</div>
							</div>
							<div className="col-xl-8"  data-aos="fade-down">
								<p><strong>A BIG "Thank you" for all the Committee Members, Volunteers, Sponsors and entire community for supporting APCO...!</strong></p>
								<p>Drawing strength from our rich cultural and advancing the Telugu heritage, sponsoring events that enrich and enlighten society, and extending support back home for educational, business and overall development of Telugu communities across the globe.

								</p>
								<p>As part of its mission, APCO intends to promote the Telugu language to children of Telugu origin in the Ohio – so that they can read and write in Telugu as second language.</p>
								<div className="row margin-top offset-margin">
									<div className="col-md-4 text-md-left text-center">
										<div className="counter-item counter-item--style-3">
											<div className="counter-item__top">
												<h6 className="counter-item__title">APCO Members</h6>
											</div>
											<div className="counter-item__lower"><span className="js-counter">87</span></div>
										</div>
									</div>
									<div className="col-md-4 text-md-left text-center">
										<div className="counter-item counter-item--style-3">
											<div className="counter-item__top">
												<h6 className="counter-item__title">Sponsors</h6>
											</div>
											<div className="counter-item__lower"><span className="js-counter">46</span><span>+</span></div>
										</div>
									</div>
									<div className="col-md-4 text-md-left text-center">
										<div className="counter-item counter-item--style-3">
											<div className="counter-item__top">
												<h6 className="counter-item__title">Events So far</h6>
											</div>
											<div className="counter-item__lower"><span className="js-counter">200</span><span>+</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 text-center"><a className="button button--primary d-inline-block d-xl-none margin-top" href="#">More about</a></div>
						</div>
					</div>
				</section>
  )
}

export default AboutUsComponent