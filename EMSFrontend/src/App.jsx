// import { useState } from 'react'

import './App.css'
//import './css/aos.css'
import './css/styles.min.css'

import AOS from "aos";
import "aos/dist/aos.css";

import WebFont from 'webfontloader';

import $ from 'jquery'
import Fancybox from './Fancybox';
// import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
// import ReactFancyBox from 'react-fancybox/lib/ReactFancyBox.js';

// import './js/jquery_min.js'
// import './js/aos.js'
// import './js/common.min.js'

// import './js/libs.min.js'

import LeftComponent from './components/LeftComponent'
import HeaderComponent from './components/HeaderComponent'
import LoginComponent from './components/LoginComponent'
import BannerComponent from './components/home/BannerComponent'
import AboutComponent from './components/home/AboutComponent'
import AboutUsComponent from './components/home/AboutUsComponent'
import VolunteerComponent from './components/home/VolunteerComponent'
import SponsorComponent from './components/home/SponsorComponent'
import UpComingEventsComponent from './components/home/UpComingEventsComponent'
import ClosedEventsComponent from './components/home/ClosedEventsComponent'
import TestimonialComponent from './components/home/TestimonialComponent'
import FooterComponent from './components/FooterComponent'
import { useEffect } from 'react';

function App() {
  // const [count, setCount] = useState(0)

  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Quicksand:300,400,500,700', 'Permanent+Marker:400'],
      }
    });
  },[])

  useEffect(()=>{
    AOS.init();
  },[])

  // const WebFontConfig = {

  //   google: {

  //     families: ['Quicksand:300,400,500,700', 'Permanent+Marker:400'],

  //   }

  // }

  const font = () => {

    var wf = document.createElement('script')

    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
    wf.type = 'text/javascript'
    wf.async = 'true'

    var s = document.getElementsByTagName('script')[0]

    s.parentNode.insertBefore(wf, s)

  }
  font()

  return (
    <>
      {/* <h1>Bismillah-hirrahman-nirraheem</h1> */}
      {/* <!DOCTYPE html> */}
{/* <html lang="en">
	<head>
		<meta charset="UTF-8"/>
		<meta name="description" content="description"/>
		<meta name="keywords" content="keywords"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
		<link rel="shortcut icon" href="img/favicon.png"/>
		<title>ANDHRA PEOPLE OF CENTRAL OHIO </title>
    </head> 
		
	<body>*/}
  <div className="page-wrapper">
			{/* <!-- aside dropdown start--> */}
			<div className="aside-dropdown">
        <LeftComponent/>
      </div>
      <HeaderComponent/>
      <LoginComponent/>

      <div><span>This is before main area</span></div>
			<main className="main">
        <BannerComponent/>
        <div><span>This is main area</span></div>
        <AboutComponent/>
        <AboutUsComponent/>
       <VolunteerComponent/>
       <SponsorComponent/>
           <UpComingEventsComponent/>
       <ClosedEventsComponent/>
       <TestimonialComponent/>
        {/* <!-- bottom bg start--> */}
				{/* <section className="bottom-background">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="bottom-background__img"><img src="/img/bottom-bg.png" alt="img"/></div>
							</div>
						</div>
					</div>
				</section> */}
				{/* <!-- bottom bg end--> */}

      </main>

      {/* <FooterComponent/> */}
      </div>
      {/*</body>
   </html> */}

    </>
  )
}

export default App
