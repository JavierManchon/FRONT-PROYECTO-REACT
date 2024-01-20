import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGames } from "../../context/GamesContext";

function MyMissions() {
    const { user } = useAuth();
    const { game, getGame } = useGames();
    const { gameId } = useParams();
  
    useEffect(() => {
      getGame(gameId);
    }, [gameId]);

    useEffect(() => {
      }, [game?.tasks]);

  
    return !user ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <h3>{game.game.title}</h3>
            
          </div>
          {Array.isArray(game?.game.tasks) && game.game.tasks.map((task) => (
            <div key={task._id}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      );
      
    }
    
export default MyMissions;

