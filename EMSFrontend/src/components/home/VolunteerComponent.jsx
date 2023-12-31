import React from 'react'

const VolunteerComponent = () => {
  return (
    // <!-- Volunteer start-->
				<section className="section action-section">
					<div className="jarallax">
						<picture>
							<source srcSet="/img/counter.jpg" media="(min-width: 992px)"/><img className="jarallax-img" src="/img/counter.jpg" alt="img"/>
						</picture>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center"  data-aos="zoom-out">
								<h2 className="action-section__title">We have Awesome Volunteer Team</h2>
								<p className="action-section__text">Join us to support the community when needed. Let us know your interests and how you would like to contribute to society. Meet new people, find help, showcase your talents, and be connected with the community.

								</p><a className="action-section__button button button--primary" href="#">Become a volunteer</a>
							</div>
						</div>
					</div>
				</section>
  )
}

export default VolunteerComponent