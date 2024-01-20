import axios from './axios';

export const getGamesReq = () => axios.get('/games');

export const getGameReq = (gameId) => axios.get(`/games/${gameId}`);

export const createGameReq = (game) => axios.post('/add-game', game);

export const updateGameReq = (game) => axios.put(`/games/${game._id}`, game);

export const deleteGameReq = (id) => axios.delete(`/games/${id}`);

export const getTasksReq = (game) => axios.get(`/tasks/${game._id}`, game);

export const createTaskReq = (game) => axios.post(`/tasks/${game._id}`, game);

export const deleteTaskReq = (id) => axios.delete(`/tasks/${id}`);