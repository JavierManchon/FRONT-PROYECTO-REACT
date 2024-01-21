import { createContext, useContext, useState } from "react";
import { createGameReq, getGamesReq, createTaskReq, deleteTaskReq, deleteGameReq, getGameReq } from "../api/games";


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

    const createTask = async (gameId, taskData) => {
        const res = await createTaskReq(gameId, taskData);
        console.log(res)
    }

    const deleteTask = async (taskId) => {
        try {
          const res = await deleteTaskReq(taskId);
          console.log(res);
          // Actualiza las tareas después de eliminar una tarea exitosamente
          setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        } catch (error) {
          console.error(error);
        }
      };

      const deleteGame = async (gameId) => {
        try {
          const res = await deleteGameReq(gameId);
          console.log(res);
          // Actualiza las tareas después de eliminar una tarea exitosamente
          setGames((prevGames) => prevGames.filter((game) => game._id !== gameId));
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <GamesContext.Provider value={{ game, games, tasks, createGame, getGames, createTask, getGame, deleteTask, deleteGame }}>
            {children}
        </GamesContext.Provider>
    )
}