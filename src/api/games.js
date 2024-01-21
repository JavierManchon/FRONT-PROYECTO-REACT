import axios from './axios';

export const getGamesReq = () => axios.get('/games');

export const getGameReq = (gameId) => axios.get(`/games/${gameId}`);

export const createGameReq = (game) => axios.post('/add-game', game);

export const updateGameReq = (game) => axios.put(`/games/${game._id}`, game);

export const deleteGameReq = (gameId) => axios.delete(`/games/${gameId}`);

export const getTasksReq = (game) => axios.get(`/tasks/${game._id}`, game);

export const createTaskReq = (gameId, taskData) => axios.post(`/tasks/${gameId}`, taskData);

export const deleteTaskReq = (taskId) => axios.delete(`/tasks/${taskId}`);