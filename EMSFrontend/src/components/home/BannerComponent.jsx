import imgpromo3 from '/img/promo_3.jpg'
import img834promo3 from '/img/834promo_3.jpg'
import React from 'react'



const BannerComponent = () => {
  return (
    // <!-- promo start-->
				<section className="promo promo--front_2 banner">
					<div className="promo-slider ">
						
						<div className="promo-slider__item promo-slider__item--style-3">
							<picture>
								<source srcSet="/img/promo_3.jpg" media="(min-width: 376px)"/>
								<source srcSet="/img/834promo_3.jpg" media="(min-width: 376px)"/><img className="img--bg" src="/img/834promo_3.jpg" alt="img"/>
								{/* <source srcSet={imgpromo3} media="(min-width: 835px)"/>
								<source srcSet={img834promo3} media="(min-width: 376px)"/><img className="img--bg" src={img834promo3} alt="img"/> */}
							</picture>
							<div className="container">
								<div className="row">
									<div className="col-xl-8 offset-xl-2">
										<div className="align-container">
											<div className="align-container__item">
												<div className="promo-slider__wrapper-1">
													<h2 className="promo-slider__title"><span>Meet - Greet</span><br/><span>Socialize</span></h2>
												</div>
												<div className="promo-slider__wrapper-2">
													<p className="promo-slider__subtitle">APCO offers various types of membership options. Benefits include programs, privileged access to member, networking with other members of the community and much more.

													</p>
												</div>
												<div className="promo-slider__wrapper-3"><a className="button promo-slider__button button--primary" href="membershipBenefit.html">Become Member</a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="promo-slider__item promo-slider__item--style-1">
							<picture>
								<source srcSet="/img/promo_1.jpg" media="(min-width: 835px)"/>
								<source srcSet="/img/834promo_1.jpg" media="(min-width: 376px)"/><img className="img--bg" src="/img/834promo_1.jpg" alt="img"/>
							</picture>
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="align-container">
											<div className="align-container__item">
												<div className="promo-slider__wrapper-1">
													<h2 className="promo-slider__title"><span>Sunitha </span> <br/><span>Swaramadhuri</span></h2>
												</div>
												<div className="promo-slider__wrapper-2">
													<p className="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
												</div>
												<div className="promo-slider__wrapper-3"><a className="button promo-slider__button button--primary" href="#">Register</a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="promo-slider__item promo-slider__item--style-2">
							<picture>
								<source srcSet="/img/promo_2.jpg" media="(min-width: 835px)"/>
								<source srcSet="/img/834promo_2.jpg" media="(min-width: 376px)"/><img className="img--bg" src="/img/834promo_2.jpg" alt="img"/>
							</picture>
							<div className="container">
								<div className="row">
									<div className="col-xl-7">
										<div className="align-container">
											<div className="align-container__item">
												<div className="promo-slider__wrapper-1">
													<h2 className="promo-slider__title"><span>Bharatanatyam</span><br/><span>The Art of Graceful Expression </span></h2>
												</div>
												<div className="promo-slider__wrapper-2">
													<p className="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
												</div>
												{/* <!-- <div className="promo-slider__wrapper-3"><a className="button promo-slider__button button--primary" href="#">Discover</a></div> --> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div><a className="anchor promo-pannel__anchor" href="#about"> <span>Scroll Down</span></a>
					{/* <!-- promo pannel start-->
					<!-- <div className="promo-pannel">
						<div className="promo-pannel__video"><img className="img--bg" src="img/video_block-2.jpg" alt="image"/><a className="video-trigger" href="http://www.youtube.com/watch?v=7ISb7cjbjeA"><span>Watch our video</span><i className="fa fa-play" aria-hidden="true"></i></a></div>
					</div> -->
					
					<!-- promo pannel end--> */}
					<div className="container">
						<div className="row">
							<div className="col-12">
								{/* <!-- slider nav start--> */}
								<div className="slider__nav slider__nav--promo">
									<div className="promo-slider__count"></div>
									<div className="slider__arrows">
										<div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
										</div>
										<div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
										</div>
									</div>
								</div>
								{/* <!-- slider nav end--> */}
							</div>
						</div>
					</div>
				</section>
				
  )
}

export default BannerComponent