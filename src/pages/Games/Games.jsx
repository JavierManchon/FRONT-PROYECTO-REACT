import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useGames } from "../../context/GamesContext";
import { Link } from "react-router-dom";

function Games() {

  const {user} = useAuth();
  
  const {getGames, games} = useGames();

  useEffect(() => {
    getGames()
  }, [])

  

  return !user ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h4>Games</h4>
      {!games.length ? (
        <div>
          <h4>No games found!</h4>
          <p><Link to="/add-game">Start adding your first game</Link></p>
        </div>
      ) : (
        games.map((game) => (
        <div key={game._id}>
          {console.log('Game Info:', game)}
          <h4>{game.title}</h4>
          <p>{game.rating}</p>
          <p>{game.review}</p>
          <button><Link to={`/games/${game._id}/my-missions`}>Track It!</Link></button>
        </div>
      ))
      )}
    </div>
  );
}

export default Games;
