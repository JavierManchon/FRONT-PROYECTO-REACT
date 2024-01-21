import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {

  const {register, handleSubmit, formState: {errors} } = useForm();
  const {signin, isAuthenticated, errors: loginErrors} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/games');
    }
  }, [isAuthenticated])

  return (
    <div className="login-container">
      <img src='https://res.cloudinary.com/dbckjkikz/image/upload/v1705855281/o8mkykact6lteftwi7e4.png' alt='Logo de game Vault' className='logo-login'/>
      <div className="content-container">
        <div className="form-area-container">
        {
          loginErrors.map((error, i) => {
            <div key={i}>
              {error}
            </div>
          })
        }
        <form className="login-form" onSubmit={handleSubmit(async (data) => {
            signin(data);
          })}>
          <input className="login-input" type="email" placeholder="Email" {...register('email', {required: true})}></input>
          {errors.username && <p>Email is required</p>}
          <input className="login-input" type="password" placeholder="Password" {...register('password', {required: true})}></input>
          {errors.username && <p>Password is required</p>}
          <button className="login-button" type="submit">Login</button>
        </form>
        <p className="redirect-link"><Link to="/register">Do not have an account yet?</Link></p>
        </div>
        </div>
    </div>
  )
}

export default Login
