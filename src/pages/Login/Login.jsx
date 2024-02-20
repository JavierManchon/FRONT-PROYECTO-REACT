import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, isAuthenticated, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/games');
    }
  }, [isAuthenticated]);

  const onSubmit = async (data) => {
    try {
      await signin(data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setLoginError("Invalid email or password");
      } else {
        setLoginError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="login-container">
      <img src='https://res.cloudinary.com/dbckjkikz/image/upload/v1705855281/o8mkykact6lteftwi7e4.png' alt='Logo de game Vault' className='logo-login'/>
      <div className="content-container">
        <div className="form-area-container">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input className="login-input" type="email" placeholder="Email" {...register('email', { required: true })} />
            {errors.email && <p>Email is required</p>}
            <input className="login-input" type="password" placeholder="Password" {...register('password', { required: true })} />
            {errors.password && <p>Password is required</p>}
            {loginErrors && loginErrors.map((error, i) => (
            <div key={i} className="error-message">{error}</div>
            ))}
            {loginError && <div className="error-message">{loginError}</div>}
            <button className="login-button" type="submit">Login</button>
          </form>
          <p className="redirect-link"><Link to="/register">Do not have an account yet?</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
