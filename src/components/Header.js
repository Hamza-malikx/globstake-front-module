import React, { useState } from "react";
// import '../components/assets/css/cryptonio.css'
// import '../components/assets/css/responsive.css'
import { Link } from "react-router-dom";
export default function Header() {
  const [state, setState] = useState(false);
  const toggleHandler = () => {
    const ab = document.getElementById("navbarSupportedContent");
    // console.log(ab);
    state === true ? setState(false) : setState(true);
    // if (state === false) {
    //   // ab.classList.remove("show");
    //   // ab.classList.remove("collapse");
    //   // ab.classList.remove("navbar-collapse");
    // }
  };
  return (
    <div>
      <header id="header-06" className="header">
        <nav className="navbar navbar-expand-md navbar-light bg-faded cripto_nav">
          <div className="container">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleHandler}
            >
              <i className="fas fa-bars"></i>
            </button>
            <a className="navbar-brand" data-scroll href="/">
              <img
                src="assets/images/logo.png"
                alt="logo"
                style={{ width: "200px" }}
              ></img>
            </a>

            <div
              className={
                state === false
                  ? "collapse navbar-collapse cd123"
                  : "collapse navbar-collapse active"
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a data-scroll href="#header-06" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-scroll
                    href="#welcome_cryptonic_06"
                    className="nav-link"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" id="myBtn">
                    How To Invest
                  </a>
                </li>
                <li className="nav-item">
                  <a data-scroll href="#token_sale_06" className="nav-link">
                    Stake
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-scroll
                    href="~/Presentation for zoom globstake-converted-compressed.pdf"
                    className="nav-link"
                  >
                    Presentation
                  </a>
                </li>

                <li className="nav-item">
                  <a data-scroll href="#contact_06" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <Link data-scroll to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link data-scroll to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container abt_bnner">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="intro-text">
                <h1>Preface</h1>
                <p>
                  GlobStake is a marketing company that works to increase the
                  holder and usefulness of all types of cryptocurrencies.
                  GlobStake has a very experienced team with 10 years of
                  experience and this team works on new innovations along with
                  marketing so that more and more people can recognize and take
                  advantage of any crypto currency. GlobStake also provides
                  people with Staking, Farming and other ways of referral income
                  for this, so that people can earn a good income through this
                  and can also give benefits to other people as well as grow a
                  grown company.
                </p>
                <div className="btn_video_wrapper">
                  <Link
                    to="/login"
                    className="btn btn-default btn-default-style"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-default btn-default-style"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6 img-wrapper">
              <div className="intro-img">
                <div className="bounce_wrapper">
                  <img
                    src="assets/images/header-06.png"
                    alt=""
                    style={{ width: "457px" }}
                  ></img>
                  <div className="shape-1">
                    <div className="box bounce-1">
                      <img
                        src="assets/images/bounce/header1_b.png"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="shape1 header-shape abt_bnner">
          <img
            src="assets/images/shape/home_6/header6_shape_1.png"
            alt=""
          ></img>
        </span>
        <span className="shape2 header-shape abt_bnner">
          <img
            src="assets/images/shape/home_6/header6_shape_2.png"
            alt=""
          ></img>
        </span>
        <span className="shape3 header-shape abt_bnner">
          <img
            src="assets/images/shape/home_6/header6_shape_3.png"
            alt=""
          ></img>
        </span>
        <span className="shape4 header-shape abt_bnner ">
          <img
            src="assets/images/shape/home_6/header6_shape_4.png"
            alt=""
          ></img>
        </span>
        <span className="shape5 header-shape abt_bnner">
          <img
            src="assets/images/shape/home_6/header6_shape_5.png"
            alt=""
          ></img>
        </span>
        <span className="shape6 header-shape abt_bnner">
          <img
            src="assets/images/shape/home_6/header6_shape_6.png"
            alt=""
          ></img>
        </span>

        <span className="bubble1 header-shape abt_bnner">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble2 header-shape abt_bnner">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble3 header-shape abt_bnner">
          <img src="assets/images/particals_icon/fixed2.png" alt=""></img>
        </span>
        <span className="bubble4 header-shape abt_bnner">
          <img src="assets/images/particals_icon/fixed4.png" alt=""></img>
        </span>

        <div id="particles1-js" className="particles"></div>
      </header>
    </div>
  );
}
