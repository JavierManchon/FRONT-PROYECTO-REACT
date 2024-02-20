import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const {register, handleSubmit, formState: {errors}} = useForm();
  //Ponemos un apodo a errors para saber a cual nos referimos
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/games');
    }
  }, [isAuthenticated])

  //En map del error, la paso la i que indica la posicion para darle una key diferenciada a cada error y no de fallo
  return (
    <div className="register-container">
      <img src='https://res.cloudinary.com/dbckjkikz/image/upload/v1705855281/o8mkykact6lteftwi7e4.png' alt='Logo de game Vault' className='logo-register'/>
      <div className="content-container">
        <div className="form-area-container">
        <form className="register-form" onSubmit={handleSubmit(async (values) => {
          signup(values);
        })}>
          <input className="login-input" type="text" placeholder="Username" {...register('username', { required: true })}></input>
          {errors.username && <p>Username is required</p>}
          <input className="login-input" type="email" placeholder="Email" {...register('email', { required: true })}></input>
          {errors.email && <p>Email is required</p>}
          <input className="login-input" type="password" placeholder="Password" {...register('password', { required: true })}></input>
          {errors.password && <p>Password is required</p>}
          {registerErrors.map((error, i) => (
          <div className="error-message" key={i}>{error}</div>
          ))}
          <button className="login-button" type="submit">Register</button>
        </form>
        <p className="redirect-link"><Link to="/login">Already have an account?</Link></p>
      </div>
      </div>
    </div>
  )
}

export default Register
