import React from 'react'

function AboutComponent() {
  return (
    
    // <!-- About-->
<section className="section about-us" id="about">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-lg-6" data-aos="fade-down">
				<div className="heading heading--primary"><span className="heading__pre-title">స్వాగతం! సుస్వాగతం!</span>
					<h2 className="heading__title"><span>Welcome to </span> <span>APCO !</span></h2>
				</div>

				{/* <!-- <p><strong>ఆంధ్రుల గుండె చప్పుడు</strong></p> --> */}
				<p>Andhra People of Central Ohio was founded and incorporated in 2017 as a non-profit organization to represent the Telugu speaking people in and around Central Ohio. Since its inception, APCO has distinguished itself through various activities in pursuit of its mission in Columbus. APCO will provide needed cultural, social, financial and educational support services to the Central Ohio AP Telugu community in an effective and efficient manner.</p>

				<p>APCO is a non-political youth-oriented organization that actively involves its volunteers in setting its direction and in providing regular feedback on its programs and always encourages volunteers to lead various activities. APCO is an open and transparent organization where service is emphasized.</p>

				<p>Over the years, APCO has conducted several Telugu programs and created a huge amount of goodwill amongst the Telugu people of Ohio. The Telugu community has been growing continuously and APCO is doing its best to cater to the needs of this ever-growing community.</p>
				
				<a className="button button--primary" href="about.html">More About</a>
			</div>
			<div className="col-lg-6 col-xl-5 offset-xl-1 " data-aos="fade-up">
				<div className="info-box"><img className="img--layout" src="/img/about_layout.png" alt="img"/><img className="img--bg rounded-sm mobimg" src="/img/about-us.jpg" alt="img"/>
					
					</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default AboutComponent