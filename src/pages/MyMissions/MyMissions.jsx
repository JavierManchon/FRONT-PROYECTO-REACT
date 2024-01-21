import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGames } from "../../context/GamesContext";
import { useForm } from "react-hook-form";

function MyMissions() {
    const { user } = useAuth();
    const { game, getGame, createTask, deleteTask } = useGames();
    const { gameId } = useParams();
    const { register, handleSubmit, setValue } = useForm();
  
    useEffect(() => {
      getGame(gameId);
    }, [gameId]);

    useEffect(() => {
      }, [game?.tasks]);

      const onSubmit = async (data) => {
        try {
          await createTask(gameId, data);
          getGame(gameId);
          setValue('title', '');
          setValue('description', '');
        } catch (error) {
          console.error(error);
        }
      };

      const handleDeleteTask = async (taskId) => {
        try {
          await deleteTask(taskId);
          getGame(gameId);
        } catch (error) {
          console.error(error);
        }
      };

  
    return !game ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <h3>{game.game.title}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Title:</label>
                <input
                type="text"
                id="title"
                name="title"
                {...register('title', { required: true })}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                id="description"
                name="description"
                {...register('description', { required: true })}
                />
                <button type="submit">Add Task</button>
             </form>
          </div>
          {Array.isArray(game?.game.tasks) && game.game.tasks.map((task) => (
            <div key={task._id}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
                <button onClick={() => handleDeleteTask(task._id)}>
                    Delete Task
                </button>
            </div>
          ))}
        </div>
      );
      
    }
    
export default MyMissions;

