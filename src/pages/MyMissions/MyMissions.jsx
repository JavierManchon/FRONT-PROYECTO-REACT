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
        <div className="missions-container">
          <div className="missions-header">
            <h3 className="missions-title">{game.game.title}</h3>
            <img className="missions-image" src={game.game.picture} alt={game.game.title} />
            <div className="superposicion"></div>
          </div>
          <div className="missions-content-container">
            <div className="form-area-container">
              <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="title">Title:</label>
                  <input placeholder="Conseguir 100 monedas de oro"
                  type="text"
                  id="title"
                  name="title"
                  {...register('title', { required: true })}
                  />
                  <label htmlFor="description">Description:</label>
                  <textarea
                  placeholder="Hacer todas las quests que hay en Vientormenta para conseguir oro"
                  id="description"
                  name="description"
                  {...register('description', { required: true })}
                  />
                  <button type="submit">Add Task</button>
              </form>
            </div>
          </div>
          <div className="missions-area">
          <h4 className="tasks-area-title">MY MISSIONS</h4>
            <div className="tasks-area">
            {Array.isArray(game?.game.tasks) && game.game.tasks.map((task) => (
              <div className="task-card" key={task._id}>
                <h4 className="task-card-title">{task.title}</h4>
                <p className="task-card-description">{task.description}</p>
                  <button className="card-delete" onClick={() => handleDeleteTask(task._id)}>
                      X
                  </button>
              </div>
            ))}
            </div>
          </div>
        </div>
      );
      
    }
    
export default MyMissions;

