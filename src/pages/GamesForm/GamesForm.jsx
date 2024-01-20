import { useForm } from "react-hook-form";
import { useGames } from "../../context/GamesContext";

function GamesForm() {

  const {register, handleSubmit} = useForm();
  const {createGame} = useGames()
  

  const onSubmit = handleSubmit((data) =>{
    // Me daba error obteniendo el rating, hago parseFloat para que lo obtenga como numero
    data.rating = parseFloat(data.rating);
    createGame(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Pokemon Emerald"
        {...register("title")} />
        <input type="number" placeholder="9" min="1" max="10"
        {...register("rating")} />
        <textarea type="text" placeholder="Wonderful and gorgeous game. Peak content by Nintendo" rows="3"
        {...register("review")} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default GamesForm
