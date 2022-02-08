import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        id="footer-06"
        className="footer"
        style={{ backgroundColor: "#10044c" }}
      >
        <div className="container">
          <div className="row footer-btm-wrapper">
            <div className="col-md-12 col-lg-12">
              <div className="footer_items">
                <div className="footer-single-col footer_single_list_1">
                  <h3 className="subtitle_1">
                    &nbsp;
                    <img
                      src="assets/images/logo.png"
                      alt=""
                      width="200px"
                    ></img>
                  </h3>
                  <p>
                    Artificial intelligence based on netural networks, built
                    using newest algorithms for self learning, analysis and the
                    correlation the objects of analysis.
                  </p>
                  <ul className="social-links list-unstyled ml-auto">
                    <li className="nav-item">
                      <a
                        href="https://t.me/joinchat/70AqvQKTtFFlNTVl"
                        target="_blank"
                      >
                        <i className="fab fa-telegram-plane"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://twitter.com/globstake" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.youtube.com/channel/UCwxASPuG-JR2pEb_cAYHUHA"
                        target="_blank"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        href="https://www.instagram.com/globstake_official/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        href="https://www.facebook.com/globstakeofficial"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-single-col footer_single_list_2">
                  <h3 className="subtitle_1">Company</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#header-06">Home</a>
                    </li>
                    <li>
                      <a href="#welcome_cryptonic_06">About Us</a>
                    </li>
                    <li>
                      <a href="#token_sale_06">Stake</a>
                    </li>

                    <li>
                      <a href="#contact_06">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-single-col footer_single_list_4">
                  <h3 className="subtitle_1">Support</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="login.html">Login</a>
                    </li>

                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="#">Terms Condition</a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p> Copyright &copy; 2022, GlobStake.io</p>
        </div>
        <span className="shape1 header-shape" style={{ zIndex: "1" }}>
          <img
            src="assets/images/shape/home_6/footer_shape_1.png"
            style={{ zIndex: "1" }}
            alt=""
          ></img>
        </span>
        <span className="shape2 header-shape" style={{ zIndex: "1" }}>
          <img
            src="assets/images/shape/home_6/footer_shape_2.png"
            style={{ zIndex: "1" }}
            alt=""
          ></img>
        </span>
        <span className="shape3 header-shape" style={{ zIndex: "1" }}>
          <img
            src="assets/images/shape/home_6/footer_shape_3.png"
            style={{ zIndex: "1" }}
            alt=""
          ></img>
        </span>
      </footer>
    </div>
  );
}
