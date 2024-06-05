import "../assets/scss/Login.scss";

const Login = () => {
  return (
    <div id="login">
      <div className="form">
        <form>
          <div className="banner"></div>

          <div className="box"></div>

          <form action="">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Enter Email" />
            </div>

            <div className="input">
              <label htmlFor="email">Password</label>
              <input type="password" placeholder="Password" />
            </div>

            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>

            <button type="submit">Log In</button>
          </form>

          <div className="sign-in">
            <h4>Sign in with</h4>

            <div className="btns">
              <button className="facebook" type="button">
                <i className="bx bxl-facebook-circle"></i>
              </button>
              <button className="google" type="button">
                <i className="bx bxl-google"></i>
              </button>
            </div>
          </div>
        </form>

        <div className="sign-up">
          <p>
            Don't have an account ? <strong>Signup now</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
