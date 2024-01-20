import { createContext, useContext, useState } from "react";
import { createGameReq, getGamesReq, createTaskReq, deleteTaskReq, getTasksReq, getGameReq } from "../api/games";


const GamesContext = createContext();

export const useGames = () => {
    const context = useContext(GamesContext);

    if (!context) {
      throw new Error('useGames has been used without GamesProvider');
    }
    return context;
  };

export function GamesProvider({ children }) {
    const [games, setGames] = useState([]);
    const [game, setGame] = useState(null);
    const [tasks, setTasks] = useState([]);


    const createGame = async (game) => {
        const res = await createGameReq(game);
        console.log(res)
    }

    const getGames = async () =>{
        try {
            const res = await getGamesReq();
            setGames(res.data);
        } catch (error) {
            console.error(error);
        }
    }
    const getGame = async (gameId) => {
        try {
          const res = await getGameReq(gameId);
          setGame(res.data);
          setTasks(res.data?.tasks || []);
        } catch (error) {
          console.error(error);
        }
      };

    const createTask = async (game) => {
        const res = await createTaskReq(game);
        console.log(res)
    }


    return (
        <GamesContext.Provider value={{ game, games, tasks, createGame, getGames, createTask, getGame }}>
            {children}
        </GamesContext.Provider>
    )
}