import React from 'react';
import Helmet from 'react-helmet';


// Bootstrap
import '../components/assets/css/assets/bootstrap.min.css'
import '../components/assets/images/favicon.png'

// Font awesome
import '../components/assets/css/assets/font-awesome.min.css'
import '../components/assets/fonts/flaticon/flaticon.css'

// Popup
import '../components/assets/css/assets/magnific-popup.css'
// import '../components/assets/css/assets/owl.carousel.css'
import '../components/assets/css/assets/owl.theme.css'
import '../components/assets/css/assets/jquery.countdown.css'
import '../components/assets/css/assets/animate.css'

// Main style
import '../components/assets/css/assets/preloader.css'

// Main style
import '../components/assets/css/style.css'
import '../components/assets/css/cryptonio.css'
import '../components/assets/css/responsive.css'


import HomePage from './HomePage';

import Header from '../components/Header';
import Footer from '../components/Footer';


// *******************************************************************************
export default function IndexPage() {
  return <div>

    <Header/>
    <HomePage/>
    <Footer/>

    <Helmet>
      <script src="assets/js/assets/jquery-3.2.1.min.js"></script>
      <script src="assets/js/assets/popper.min.js"></script>
      <script src="assets/js/assets/bootstrap.min.js"></script>
      <script src="assets/js/assets/owl.carousel.min.js"></script>
      <script src="assets/js/assets/jquery.sticky.js"></script>
      <script src="assets/js/assets/isotope.pkgd.min.js"></script>
      <script src="assets/js/assets/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/assets/jquery.downCount2.js"></script>
      <script src="assets/js/assets/jquery.countdown.js"></script>
      <script src="assets/js/assets/particles.js"></script>
      <script src="assets/js/assets/app.js"></script>
      <script src="assets/js/assets/smooth-scroll.js"></script>
      <script src="assets/js/assets/wow.min.js"></script>
      <script src="assets/js/custom.js"></script>

    </Helmet>

  </div>;
}
