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
    <div>
      <h4>Login</h4>
      {
        loginErrors.map((error, i) => {
          <div key={i}>
            {error}
          </div>
        })
      }
      <form onSubmit={handleSubmit(async (data) => {
          signin(data);
        })}>
        <input type="email" placeholder="mario@super.com" {...register('email', {required: true})}></input>
        {errors.username && <p>Email is required</p>}
        <input type="password" placeholder="Peach123" {...register('password', {required: true})}></input>
        {errors.username && <p>Password is required</p>}
        <button type="submit">Login</button>
      </form>
      <p><Link to="/register">Don't have an account yet?</Link></p>
    </div>
  )
}

export default Login
