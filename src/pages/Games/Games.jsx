import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useGames } from "../../context/GamesContext";
import { Link } from "react-router-dom";

function Games() {

  const {user} = useAuth();
  
  const {getGames, games, deleteGame} = useGames();

  useEffect(() => {
    getGames()
  }, [])

  const handleDeleteGame = async (gameId) => {
    try {
      await deleteGame(gameId);
      getGames();
    } catch (error) {
      console.error(error);
    }
  };

  return !user ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="games-container">
      {!games.length ? (
        <div>
          <h4>No games found!</h4>
          <p><Link to="/add-game">Start adding your first game</Link></p>
        </div>
      ) : (
        games.map((game) => (
        <div className="game-card" key={game._id}>
          <img className="card-picture" src={game.picture} alt={game.title} />
          <h4 className="card-title">{game.title}</h4>
          <div className="card-rating">
            <p className="card-rating-number">{game.rating}</p>
          </div>
          <div className="card-review">
            <p className="card-review-text">{game.review}</p>
          </div>
                <button className="card-delete" onClick={(e) => 
                  {
                    e.preventDefault();
                    handleDeleteGame(game._id)
                    }
                }>
                    X
                </button>
          <button className="card-trackit"><Link to={`/games/${game._id}/my-missions`}>Track It!</Link></button>
        </div>
      ))
      )}
    </div>
  );
}

export default Games;
