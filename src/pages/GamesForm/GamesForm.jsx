import { useForm } from "react-hook-form";
import { useGames } from "../../context/GamesContext";
import { Link, useNavigate } from "react-router-dom";

function GamesForm() {
  const { register, handleSubmit } = useForm();
  const { createGame } = useGames();
  const navigate = useNavigate();

  //Lo pongo con esta forma porque me estaba dado error la carga de archivos
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("rating", data.rating);
    formData.append("review", data.review);
    formData.append("picture", data.picture[0]);

    try {
      await createGame(formData);
      // Redireccionar solo si la creación del juego fue exitosa
      navigate('/games');
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <input type="text" placeholder="Pokemon Emerald" {...register("title")} />
        <input type="number" placeholder="9" min="1" max="10" {...register("rating")} />
        <textarea
          type="text"
          placeholder="Wonderful and gorgeous game. Peak content by Nintendo"
          rows="3"
          {...register("review")}
        />
        <input type="file" id="picture" name="picture" {...register("picture")} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default GamesForm;
