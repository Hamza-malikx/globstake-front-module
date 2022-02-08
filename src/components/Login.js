import React from "react";
import styles from "./cssLogin/cssLogin.module.css";
// import styles from "./cssLogin/regs.module.css";
const Login = () => {
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
              <div className={styles.subtitle}>
                Access your personal account
              </div>
              <span id="metamaskConnections" style={{ color: "red" }}>
                Tronlink is not connected..!..Wait...
              </span>
              <button
                className={`${styles.btn} ${styles.btnPrimary} ${styles.loginbtn}`}
                disabled
                id="vendor"
              >
                Authorized Login
              </button>
              <p className={styles.note} style={{ color: "#fff" }}>
                Remember to authorize with the correct Tron address.
              </p>

              <div className={styles.subtitle}>View an Account</div>
              <form>
                <div className={styles.formRow}>
                  <input
                    id={styles.loginid}
                    className={styles.input_bg}
                    type="text"
                    required
                    maxlength="100"
                    placeholder="Please enter ID or Tron address "
                    className={styles.formInput}
                  />
                  <p className={styles.note} style={{ color: "#fff" }}>
                    Enter the account id or Tron address
                  </p>
                </div>
                <div className="form-row">
                  <input
                    type="submit"
                    className={`${styles.btn} ${styles.btnSecondary} ${styles.loginbtn}`}
                    id="btnlogins"
                    value="Login"
                  />
                </div>
              </form>
              <p className={styles.regFootnote} style={{ color: "#fff" }}>
                Don’t have an account?
              </p>
              <div className="footer-section2">
                <a
                  href="/"
                  title="GlobStake Smart Contract"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  GlobStake Smart Contract
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loader}>
        <center
          style={{
            zIndex: "99999",
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* <h6
            style={{
              fontWeight: "700",
              fontSize: "16px",
              zIndex: "99999",
              color: "#fff",
            }}
          >
            {" "}
            Please wait..
          </h6> */}
        </center>
      </div>
    </div>
  );
};

export default Login;
