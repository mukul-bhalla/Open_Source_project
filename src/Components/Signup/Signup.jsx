import React from 'react';
import "./Signup.css";
const LoginPage = () => {
  return (
    <main>
      <section className="section-login">
        <div className="section-main">
          <div className="section-login-1">
            <div className="section-login-1-main">
              <h1 className="section-login-1-title" style={{marginBottom:"20px"}}>OSP</h1>
              <p className="section-login-1-text" style={{marginBottom:"50px"}}>Welcome to the world of finance</p>
              <div className="section-login-1-img">
                <img
                  src="https://www.bluelakefinserve.com/img/finance.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="section-login-2">
            <div className="section-login-2-main">
              <h1 className="section-login-2-title">Signup</h1>
              <form className="section-login-2-form">
                <div className="login-form-1">
                  <label htmlFor="input-email">Email:</label>
                  <input
                    type="text"
                    id="input-email"
                    placeholder="kremlin@gmail.com"
                    required
                  />
                </div>
                <div className="login-form-2">
                  <label htmlFor="input-name">Full Name:</label>
                  <input
                    type="text"
                    id="input-name"
                    placeholder="joseph Stalin"
                    required
                  />
                </div>
                <div className="login-form-3">
                  <label htmlFor="input-password">Password</label>
                  <input
                    type="password"
                    id="input-password"
                    placeholder="At least 8 characters"
                    required
                  />
                </div>
                <div className="login-form-4">
                  <input type="checkbox" id="input-checkbox" />
                  <p>
                    By creating an account, you agree to the{' '}
                    <a href="/">Terms & Conditions.</a>
                  </p>
                </div>
                <div className="login-form-submit-btn">
                  <button>Create an Account</button>
                </div>
                <div className="login-form-5">
                  <p>
                    Already have an account? <a href="/">Sign In</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
