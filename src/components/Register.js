import React, { useState } from "react";
import styles from "./cssLogin/cssLogin.module.css";
// import styles from "./cssLogin/regs.module.css";

import { Link } from "react-router-dom";
const Register = () => {
  const [state, setState] = useState(true);
  const modelHandler = () => {
    setState(false);
  };
  const closeHandler = () => {
    setState(true);
  };
  return (
    <div>
      <div id={styles.root}>
        <div id={styles.regLayout}>
          <div className={styles.Toastify}></div>

          <div className={styles.regBox}>
            <center
              style={{ marginBottom: "20px", marginTop: "4rem" }}
            ></center>
            <a href="/">
              <div className={styles.regLabel}></div>
            </a>

            <div className="reg-content">
              <div className="subtitle" style={{ color: "#fff" }}>
                Access your personal account
              </div>
              <span className="metamaskConnection" style={{ color: "red" }}>
                Tronlink is not connected..!..Wait...
              </span>

              <button
                className={`${styles.btn} ${styles.btnPrimary} ${styles.loginbtn}`}
                id="myBtn"
                onClick={modelHandler}
              >
                Register
              </button>
              {/* <button
                className={`${styles.btn} ${styles.btnPrimary} ${styles.loginbtn}`}
                id="myBtn123"
              >
                Register
              </button> */}
              <p className={styles.note} style={{ color: "#fff" }}>
                Remember to authorize with the correct Tron address.
              </p>

              <div className={styles.subtitle}>View an Account</div>
              <form>
                <div className={styles.formRow}>
                  <input
                    id={styles.loginid}
                    className={styles.input_bg}
                    required
                    type="text"
                    maxLength="100"
                    placeholder="Please enter ID or Tron address "
                    className={styles.formInput}
                  />
                  <p className={styles.note} style={{ color: "#fff" }}>
                    Enter the account id or Tron address
                  </p>
                </div>
                <div className={styles.formRow}>
                  <input
                    type="submit"
                    className={`${styles.btn} ${styles.btnSecondary} ${styles.loginbtn}`}
                    id="btnlogins"
                    value="Connect Wallet"
                  />
                </div>
              </form>
              <p className={styles.regFootnote} style={{ color: "#fff" }}>
                Don’t have an account?
              </p>
              <br />
              <p className={styles.loginagain} style={{ color: "#fff" }}>
                If you have already registered{" "}
                <Link
                  to="/login"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  Login
                </Link>
              </p>
              <div className="footer-section2">
                <a
                  href="/"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  title="GlobStake Smart Contract"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  GlobStake Smart Contract
                </a>
              </div>

              {/* <!----modal popup start--> */}
              <div id="myModal" className={styles.modal}>
                <div
                  className="modal-content boxset"
                  style={{ display: "none" }}
                >
                  <div className="divider"></div>
                  <h4>Register an Account</h4>
                  <br />
                  {/* <p>
                    {" "}
                    <input
                      id="txtsid"
                      required
                      className="input-id"
                      placeholder="Please enter upline ID or referral link"
                      maxLength="50"
                      type="number"
                      min="0"
                    />
                  </p> */}
                  <p className="note">Enter the account id or referral link</p>
                  <br />
                  <div className="rerlbtn">
                    <button type="submit" className="btn btn-primary">
                      OK
                    </button>
                    <a href="/" className="btn btn-primary">
                      Close
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="myModal123"
                className="modal1"
                style={{ display: "none" }}
              >
                <div className="modal-content boxset">
                  <h4>Referral Confirmation</h4>
                  <br />

                  <p>
                    Your Current Referral ID is <label>@item.SID</label>
                  </p>

                  <br />
                  <div className="rerlbtn">
                    <button className="btn btn-primary">Proceed</button>
                    <a href="register.html" className="btn btn-primary">
                      No,I want to change ID
                    </a>
                  </div>
                </div>
              </div>
              {/* <script>
                                var modal = document.getElementById("myModal");
                                var btn = document.getElementById("myBtn");
                                var span = document.getElementsByClassNameName("close")[0];

                                btn.onclick = function () {
                                    modal.style.display = "block";
                                }
                                span.onclick = function () {
                                    modal.style.display = "none";
                                }
                                window.onclick = function (event) {
                                    if (event.target == modal) {
                                        modal.style.display = "none";
                                    }
                                }
                            </script>
                            <script>
                                var modal1 = document.getElementById("myModal123");
                                var btn = document.getElementById("myBtn123");
                                var span = document.getElementsByClassNameName("close")[0];

                                btn.onclick = function () {
                                    modal1.style.display = "block";
                                }
                                span.onclick = function () {
                                    modal1.style.display = "none";
                                }
                                window.onclick = function (event) {
                                    if (event.target == modal1) {
                                        modal1.style.display = "none";
                                    }
                                }
                            </script> */}
              {/* <!----modal popup end--> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={state === false ? `${styles.moddel}` : `${styles.moddelab}`}
      >
        <div className={styles.moddelInner}>
          <div className={styles.diviider}></div>
          <h4 className={styles.bbx}>Register an Account</h4>
          <input
            id="txtsid"
            className={styles.bbxi}
            placeholder="Please enter upline ID or referral link"
            maxLength="50"
            type="number"
            min="0"
          ></input>
          <p className={styles.nnn}>Enter the account id or referral link</p>
          <div className={styles.bhb}>
            <button
              class={`${styles.btn} ${styles.btnPrimary} `}
              style={{ width: "132px", marginRight: "10px" }}
            >
              OK
            </button>
            <button
              href="/"
              class={`${styles.btn} ${styles.btnPrimary} ${styles.ccdc} `}
              onClick={closeHandler}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="loader">
        <center
          style={{
            zIndex: 99999,
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h6
            style={{
              fontWeight: "700",
              fontSize: "16px",
              zIndex: "99999",
              color: "#fff",
            }}
          >
            {" "}
            Please wait..
          </h6>
        </center>
      </div>
    </div>
  );
};

export default Register;
