import React from 'react'

const SponsorComponent = () => {
  return (
    // <!-- Sponsors-->
	<section className="section text-section text-section--front_2 no-padding-bottom"><img className="text-section__bg" src="img/text-section_2.png" alt="img"/>
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<h2 className="text-section__heading"  data-aos="zoom-in">Sponsors</h2>
				</div>
			</div>
			<div className="row ">
				<div className="col-lg-8 offset-lg-4 col-xl-7 offset-xl-4">
					<h3 className="text-section__title">Thanks for  Contributing<br/>to APCO through sponsorship.</h3>
					<p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p><a className="button button--primary" href="sponsar.html">More information</a>
				</div>

				<div className="col-12 pt-5 pb-5">
					<div className="row margin-bottom">
						<div className="col-12">
							<div className="heading heading--primary heading--center">
								<h2 className="heading__title no-margin-bottom"><span>All</span> <span>SPONSORS</span></h2>
							</div>
						</div>
					</div>
					{/* <!-- donors slider start--> */}
					<section className="autoplay">
					<div className="slider-holder">
						<div className="donors-slider donors-slider--style-1 " >
							<div className="donors-slider__item">
								<div className="donors-slider__img"><img src="img/donor_1.png" alt="donor"/></div>
							</div>
							<div className="donors-slider__item">
								<div className="donors-slider__img"><img src="img/donor_2.png" alt="donor"/></div>
							</div>
							<div className="donors-slider__item">
								<div className="donors-slider__img"><img src="img/donor_3.png" alt="donor"/></div>
							</div>
							<div className="donors-slider__item">
								<div className="donors-slider__img"><img src="img/donor_4.png" alt="donor"/></div>
							</div>
							<div className="donors-slider__item">
								<div className="donors-slider__img"><img src="img/donor_4.png" alt="donor"/></div>
							</div>
							<div className="donors-slider__item">
								<div className="donors-slider__img"><img src="img/donor_4.png" alt="donor"/></div>
							</div>
							<div className="donors-slider__item">
								<div className="donors-slider__img"><img src="img/donor_4.png" alt="donor"/></div>
							</div>
						</div>
					</div>
				</section>
					{/* <!-- donors slider end--> */}
				</div>
			</div>
		</div>
	</section>
  )
}

export default SponsorComponent