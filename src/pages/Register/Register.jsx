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
    <div>
      <h4>Register</h4>
      {
        registerErrors.map((error, i) => {
          <div key={i}>
            {error}
          </div>
        })
      }
      <form onSubmit={handleSubmit(async (values) => {
          signup(values);
        })}>
        <input type="text" placeholder="Sonic" {...register('username', {required: true})}></input>
        {errors.username && <p>Username is required</p>}
        <input type="email" placeholder="sonic@thehedgehog.ring" {...register('email', {required: true})}></input>
        {errors.username && <p>Email is required</p>}
        <input type="password" placeholder="Tails123" {...register('password', {required: true})}></input>
        {errors.username && <p>Password is required</p>}
        <button type="submit">Register</button>
      </form>
      <p><Link to="/login">Already have an account?</Link></p>
    </div>
  )
}

export default Register
