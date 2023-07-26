import React from 'react';
import "./Signup.css";
function LoginForm() {
  return (<>
  <div style={{height:"100px"}}></div>
    <section className="login-container">
      <article className="form-container">
        <div className="intro">
          <h1>Welcome Back</h1>
          <p>Welcome Back, Please Enter Your details</p>
        </div>

        <form onSubmit={() => false} className="form">
          <div className="email-input">
            <span className="material-icons-round icon-size"> mail_outline </span>
            <span id="seperator"></span>
            <div className="input-container">
              <p className="sub-title">Email Address</p>
              <input type="email" name="usermail" id="email" />
            </div>
          </div>

          <div className="email-input">
            <span className="material-icons-round icon-size"> password </span>
            <span id="seperator"></span>
            <div className="input-container">
              <p className="sub-title">Password</p>
              <input type="password" name="userpass" id="password" />
            </div>
          </div>

          <button id="submit">Continue</button>
        </form>

        <article className="outro">
          <div className="ending">
            <p>Or Continue With</p>
          </div>

          <div className="socials">
            <a className="social-btn" href="/" id="g-btn"><p>Google</p></a>
            <a className="social-btn" href="/" id="a-btn"><p>Apple</p></a>
            <a className="social-btn" href="/" id="fb-btn"><p>Facebook</p></a>
          </div>
        </article>
      </article>
      <article className="login-side-bg"></article>
    </section>
    <div style={{height:"100px"}}></div>
    </>
  );
}

export default LoginForm;
