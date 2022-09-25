import "./Login.scss";
import passwordIcon from "../../images/visibility.svg";
import iconlock from "../../images/iconlock.svg";
import GoogleIcon from "../../images/google.svg";
const Login = () => {
  return (
    <div className="login_wrp">
      <div className="login_body">
        <h4>Sign in securely to your account</h4>
        <div className="email_input">
          <label>
            Email<span>*</span>
          </label>
          <input placeholder="johndoe@gmail.com" />
        </div>
        <div className="password_input">
          <div className="password_label">
            <label>
              Password<span>*</span>
            </label>
            <p>Forgot your password?</p>
          </div>
          <div className="password_input_field">
            <input type="password" placeholder="johndoe@gmail.com" />
            <img src={passwordIcon} alt="password-icon" />
          </div>
        </div>
        <div className="secure_login">
          <img src={iconlock} alt="iconlock" />
          <span>Secure Login</span>
        </div>
        <div className="login_or">OR</div>

        <div className="login_by_google">
          <img src={GoogleIcon} alt="iconlock" />
          <span>Secure Login</span>
        </div>
        <div className="login_privacy_policy">
          By Logging in, you agree to our Terms and Privacy policy.
        </div>
      </div>
    </div>
  );
};

export default Login;
