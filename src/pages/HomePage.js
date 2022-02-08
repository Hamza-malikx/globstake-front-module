import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function HomePage() {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState("");
  const closeHandler = () => {
    setState(true);
  };
  const handleChangeName = (e) => {
    setState1(e.target.value);
  };
  const submitHandler = () => {
    if (state1 === "") {
      alert("enter name plzz");
    }
  };
  return (
    <div>
      <section id="welcome_cryptonic_06" style={{ backgroundColor: "#10044c" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sub-title">
                <h2
                  className=" wow fadeInUp"
                  data-animate="fadeInUp"
                  data-delay=".1s"
                >
                  What is GlobStake?
                </h2>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
              <div className="about_cryptonic-content">
                <img
                  src="assets/images/welcome-6.png"
                  alt=""
                  className="wow ZoomInUp"
                  data-animate="ZoomInUp"
                  data-delay=".3s"
                ></img>
                <p
                  className=" wow fadeInUp"
                  data-animate="fadeInUp"
                  data-delay="0.3s"
                >
                  GlobStake is a system where landing on crypto currency, forex
                  trading with DeFi staking is done by a well experienced team
                  and its profit is shared to the investor. GlobStake system
                  utilizes Artificial intelligence to deliver a consistent daily
                  profit to our clients. GlobStake traders have more than 10
                  years of experience in one of the biggest markets in the
                  world, Forex trading which is a market with a daily trading
                  volume that exceeds 6 Trillion USD. We have been taking
                  advantage of this experience for a long time and now through
                  this experience we have prepared our entire team for you
                  people, where you will be shared. Along with trading, we are
                  currently doing work and research on landing and DeFi staking.
                </p>
                <a
                  href="/registration"
                  className="btn btn-default btn-default-style wow fadeInUp"
                  data-animate="fadeInUp"
                  data-delay="0.4s"
                >
                  Get Register
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="shape1 header-shape">
          <img src="assets/images/shape/home_6/wel-map.png" alt=""></img>
        </span>
        <span className="bubble1 header-shape">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble2 header-shape">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <div id="particles2-js" className="particles"></div>
      </section>

      <section id="about_cryptonic_06" style={{ backgroundColor: "#10044c" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-5 padding-none">
              <div className="about_cryptonic-content">
                <h2
                  className=" wow fadeInUp"
                  data-animate="fadeInUp"
                  data-delay="0.2s"
                >
                  We Bring together Marketplaces & Finance
                </h2>
                <p
                  className=" wow fadeInUp"
                  data-animate="fadeInUp"
                  data-delay="0.3s"
                >
                  Pay with Crypto currency in stories Worldwide.
                  <br />
                  Our clients – both corporate and private ones – will access
                  all the services they need from a single platform. Blockchain
                  technology gives us the chance to make your finances grow
                  faster and give better returns.
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <p
                      className=" wow fadeInUp"
                      data-animate="fadeInUp"
                      data-delay="0.3s"
                      style={{ marginTop: "0px" }}
                    >
                      <i className="fa fa-arrow-right"></i>&nbsp; Virtual Card,
                      <br />
                      <i className="fa fa-arrow-right"></i>&nbsp; limited and
                      Commisions
                    </p>
                  </div>
                  <div className="col-md-8">
                    <p
                      className=" wow fadeInUp"
                      data-animate="fadeInUp"
                      data-delay="0.3s"
                      style={{ marginTop: "0px" }}
                    >
                      <i className="fa fa-arrow-right"></i>&nbsp; Price
                      Analysis: Eve and Adam Could Be Turning
                      <br />
                      <i className="fa fa-arrow-right"></i>&nbsp; Virtual Card,
                      limited and Commisions
                    </p>
                  </div>
                </div>

                <a
                  href="~/globstake.pdf"
                  target="_blank"
                  className="btn btn-default btn-default-style wow fadeInUp"
                  data-animate="fadeInUp"
                  data-delay="0.5s"
                >
                  Download PPT
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-7">
              <div className="about-img">
                <div className="img-wrapper">
                  <img
                    src="assets/images/index-about.png"
                    alt=""
                    className="wow fadeInUp"
                    data-animate="fadeInUp"
                    data-delay=".3s"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="shape1 header-shape">
          <img src="assets/images/shape/home_6/about-light-1.png" alt=""></img>
        </span>
        <span className="shape2 header-shape">
          <img src="assets/images/shape/home_6/about-light-2.png" alt=""></img>
        </span>
        <span className="bubble1 header-shape">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble2 header-shape">
          <img src="assets/images/particals_icon/fixed2.png" alt=""></img>
        </span>
        <span className="bubble3 header-shape">
          <img src="assets/images/particals_icon/fixed3.png" alt=""></img>
        </span>
        <div id="particles3-js" className="particles"></div>
      </section>

      <section id="best_feature_06" style={{ backgroundColor: "#10044c" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sub-title">
                <h6>How it Works</h6>
                <h2>Why you Choose GlobStake</h2>
                <p>
                  GlobStake is a system where people can take a new step towards
                  making their dreams come true. This is such a company whose
                  working process is completely different from the rest and this
                  is the reason to which GlobStake is making its mark in the
                  world today and is also achieving a new height.
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_items d-flex justify-content-between">
            <div className="col-sm-12 col-md-6 col-lg-4 single-wrapper">
              <div
                className="single-items wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".3s"
              >
                <h3>Lowest Cost</h3>
                <img src="assets/images/icons/feature-01.png" alt=""></img>
                <p>
                  We had offered our first token with little price, it's
                  cost-effective affordable for all.{" "}
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 single-wrapper">
              <div
                className="single-items wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".4s"
              >
                <h3>Safe Contracts</h3>
                <img src="assets/images/icons/feature-02.png" alt=""></img>
                <p>
                  Introducing our GlobStake Tron(Tron Scan). The tron network
                  and the algorithm it operates on are indeed very safe. It is
                  safe secure and fast.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 single-wrapper">
              <div
                className="single-items wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".5s"
              >
                <h3>Fast Blockchain</h3>
                <img src="assets/images/icons/feature-03.png" alt=""></img>
                <p>
                  High transaction speed which delivery fast transactions. It
                  can perform multiple transactions at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="shape1 header-shape">
          <img src="assets/images/shape/home_6/feature-1.png" alt=""></img>
        </span>
        <div id="particles4-js" className="particles"></div>
      </section>

      {/* *********************** */}

      <section id="token_sale_06" style={{ backgroundColor: "#10044c" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sub-title">
                <h6
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                >
                  Stake
                </h6>
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".3s"
                >
                  Stake Your Token
                </h2>
              </div>
            </div>
          </div>
          <div className="row pricing_items">
            <div
              className="col-sm-12 col-md-6 col-lg-3 single-wrapper wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay=".2s"
            >
              <div className="pricing_single">
                <div className="offer_price">
                  <h4>
                    Normal Price{" "}
                    <span className="hover_text">Normal Price</span>
                    <span className="shape_1"></span>
                  </h4>
                </div>
                <div className="offer_details">
                  <span>300 Days</span>
                  <h3>You can Get triple your dollar with staking</h3>
                </div>
                <div className="sale">
                  <a href="register.html" title="">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-3 single-wrapper wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay=".3s"
            >
              <div className="pricing_single">
                <div className="offer_price">
                  <h4>
                    10% Referral<span className="hover_text">10% Referral</span>
                    <span className="shape_1"></span>
                  </h4>
                </div>
                <div className="offer_details">
                  <span>Direct Referral</span>
                  <h3>Earn best referral from each referral</h3>
                </div>
                <div className="sale">
                  <a href="register.html" title="">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-3 single-wrapper wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay=".4s"
            >
              <div className="pricing_single">
                <div className="offer_price">
                  <h4>
                    Upto 30% Level
                    <span className="hover_text">Upto 30% Level</span>
                    <span className="shape_1"></span>
                  </h4>
                </div>
                <div className="offer_details">
                  <span>Unlimited</span>
                  <h3>Earn Unlimited level income 30% to 3% every day</h3>
                </div>
                <div className="sale">
                  <a href="register.html" title="">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-3 single-wrapper wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay=".5s"
            >
              <div className="pricing_single">
                <div className="offer_price">
                  <h4>
                    Pool Income<span className="hover_text">Pool Income</span>
                    <span className="shape_1"></span>
                  </h4>
                </div>
                <div className="offer_details">
                  <span>Unlimited</span>
                  <h3>We can earn 0.25% to 1.25% Unlimited pool income </h3>
                </div>
                <div className="sale">
                  <a href="register.html" title="">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="shape1 header-shape">
          <img src="assets/images/shape/home_6/token_sale.png" alt=""></img>
        </span>
        <span className="shape2 header-shape">
          <img src="assets/images/shape/home_6/token_sale_1.png" alt=""></img>
        </span>
        <span className="bubble1 header-shape">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble2 header-shape">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble4 header-shape">
          <img src="assets/images/particals_icon/fixed3.png" alt=""></img>
        </span>
        <div id="particles5-js" className="particles"></div>
      </section>

      <section
        id="companis_supported_06"
        className="companis_supported_06"
        style={{ backgroundColor: "#10044c" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="companis_supported_logos">
                <div className="sub-title">
                  <h6
                    className=" wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay=".2s"
                  >
                    Partners
                  </h6>
                  <h2
                    className=" wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    Supported by
                  </h2>
                </div>

                <ul
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".5s"
                >
                  <li>
                    <img src="assets/images/tron.png" alt=""></img>
                  </li>
                  <li>
                    <img src="assets/images/tronlink.png" alt=""></img>
                  </li>
                  <li>
                    <img src="assets/images/tron_scan.png" alt=""></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="particles8-js" className="particles"></div>
        <span className="bubble1 header-shape">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble2 header-shape">
          <img src="assets/images/particals_icon/fixed2.png" alt=""></img>
        </span>
      </section>

      <section
        id="team_membar_06"
        className="team_membar_05"
        hidden
        style={{ backgroundColor: "#10044c" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sub-title">
                <h2
                  className=" wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                >
                  Our Team
                </h2>
                <p
                  className=" wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".3s"
                >
                  Artificial based on the netural network, the NRM assistant
                  will instantly analyze user data use.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="team_01" className="owlCarousel">
                <div className="single-wrapper ">
                  <div
                    className="team-single-item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay=".2s"
                  >
                    <figure>
                      <div className="member-img">
                        <img
                          src="assets/images/team/1.png"
                          alt="member img"
                          className="img-fluid"
                        ></img>
                      </div>
                      <figcaption>
                        <div className="member-name">
                          <h4>Chief Executive Officer</h4>
                          <span>(CEO/Founder)</span>
                        </div>
                        <ul className="social-links list-unstyled">
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                  <div
                    className="team-single-item  wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    <figure>
                      <div className="member-img">
                        <img
                          src="assets/images/team/2.png"
                          alt="member img"
                          className="img-fluid"
                        ></img>
                      </div>
                      <figcaption>
                        <div className="member-name">
                          <h4>Chief Financial Officer</h4>
                          <span>(CFO/Co-Founder)</span>
                        </div>
                        <ul className="social-links list-unstyled">
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="single-wrapper membar_item_top">
                  <div
                    className="team-single-item  wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay=".2s"
                  >
                    <figure>
                      <div className="member-img">
                        <img
                          src="assets/images/team/3.png"
                          alt="member img"
                          className="img-fluid"
                        ></img>
                      </div>
                      <figcaption>
                        <div className="member-name">
                          <h4>Chief Marketing Officer </h4>
                          <span>(CMO)</span>
                        </div>
                        <ul className="social-links list-unstyled">
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="single-wrapper">
                  <div
                    className="team-single-item  wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    <figure>
                      <div className="member-img">
                        <img
                          src="assets/images/team/4.png"
                          alt="member img"
                          className="img-fluid"
                        ></img>
                      </div>
                      <figcaption>
                        <div className="member-name">
                          <h4>Chief Technology</h4>
                          <span>Officer (CTO)</span>
                        </div>
                        <ul className="social-links list-unstyled">
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="shape1 header-shape">
          <img src="assets/images/shape/home_6/team-01.png" alt=""></img>
        </span>
        <span className="shape2 header-shape">
          <img src="assets/images/shape/home_6/team-02.png" alt=""></img>
        </span>
        <span className="bubble1 header-shape">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble2 header-shape">
          <img src="assets/images/particals_icon/fixed1.png" alt=""></img>
        </span>
        <span className="bubble4 header-shape">
          <img src="assets/images/particals_icon/fixed3.png" alt=""></img>
        </span>
        <div id="particles9-js" className="particles"></div>
      </section>

      {/* With Validations */}
      <section
        id="contact_06"
        style={{ zIndex: "1000", background: "transparent" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-2">
              <div className="sub-title">
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                >
                  Get in touch with us
                </h2>
              </div>
              <div className="contact_form">
                <Form onSubmit={submitHandler}>
                  <div className="row">
                    <div
                      className="col-12 col-sm-12  form-group  wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".2s"
                    >
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          required
                          placeholder="Your Name"
                          onChange={handleChangeName}
                        />
                      </Form.Group>
                    </div>
                    <div
                      className="col-12 col-sm-12  form-group  wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".3s"
                    >
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="email"
                          required
                          placeholder="E-mail Address"
                        />
                      </Form.Group>
                    </div>
                    <div
                      className="col-12 col-sm-12 form-group  wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".4s"
                    >
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control as="textarea" placeholder="Message" />
                      </Form.Group>
                    </div>
                    <div className="col-12 col-sm-12 form-group">
                      <div
                        className="submit-btn  wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay=".5s"
                      >
                        <input type="submit" value="Send Massage"></input>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div id="particles11-js" className="particles"></div>
      </section>
      {/* ********************************************************* */}

      <section
        id="contact_066"
        // className="ccsc"
        style={{
          backgroundColor: "#10044c",
          display: "none !important",
          zIndex: "1",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-2">
              <div className="sub-title">
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                >
                  Get in touch with us
                </h2>
              </div>
              <div className="contact_form">
                <form action="#">
                  <div className="row">
                    <div
                      className="col-12 col-sm-12  form-group  wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".2s"
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      ></input>
                    </div>
                    <div
                      className="col-12 col-sm-12  form-group  wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".3s"
                    >
                      <input
                        type="email"
                        className="form-control person-email"
                        id="email"
                        placeholder="E-mail Address"
                      ></input>
                    </div>
                    <div
                      className="col-12 col-sm-12 form-group  wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".4s"
                    >
                      <textarea
                        className="form-control"
                        id="comment"
                        placeholder="Massage"
                      ></textarea>
                    </div>
                    <div className="col-12 col-sm-12 form-group">
                      <div
                        className="submit-btn  wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay=".5s"
                      >
                        <input type="submit" value="Send Massage"></input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="particles11-js" className="particles"></div>
      </section>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <iframe
            class="embed-responsive-item video"
            src="https://www.youtube.com/embed/aTNpf_xtz1A"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div id={state === false ? "popup1" : null}>
        <iframe
          class="embed-responsive-item video"
          src="https://www.youtube.com/embed/aTNpf_xtz1A"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <button id="close1">
          <i
            class="fa fa-times-circle"
            aria-hidden="true"
            onClick={closeHandler}
          ></i>
        </button>
      </div>
    </div>
  );
}
