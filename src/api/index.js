import axios from "axios";
//https://trackfit-app-backend.onrender.com
const API = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const userSignUp = async (data) => API.post("/signUp", data);
export const userLogIn = async (data) => API.post("/login", data);
export const userGoal = async (data, token) =>
  API.post("/goal", data, { headers: { auth: token } });
export const userExercise = async (data, token) =>
  API.post("/exercise", data, { headers: { auth: token } });
export const breakfast = async (data, token) =>
  API.post("/breakfast", data, { headers: { auth: token } });
export const lunch = async (data, token) =>
  API.post("/lunch", data, { headers: { auth: token } });
export const snakes = async (data, token) =>
  API.post("/snakes", data, { headers: { auth: token } });
export const dinner = async (data, token) =>
  API.post("/dinner", data, { headers: { auth: token } });
export const getGoal = async (token) =>
  API.get("/getGoals", { headers: { auth: token } });
export const getWorkouts = async (token) =>
  API.get("/workouts", { headers: { auth: token } });

export const deleteWorkout = async (id, token) =>
  API.delete(`/deleteworkout?id=${id}`, { headers: { auth: token } });

export const getWorkoutById = async (id, token) =>
  API.get(`/getWorkoutById?id=${id}`, { headers: { auth: token } });

export const updateWorkout = async (id, data, token) =>
  API.put(`/updateworkout?id=${id}`, data, { headers: { auth: token } });

export const getBreakfast = async (token) =>
  API.get("/getBreakfast", { headers: { auth: token } });

export const getLunch = async (token) =>
  API.get("/getLunch", { headers: { auth: token } });

export const getSnakes = async (token) =>
  API.get("/getSnakes", { headers: { auth: token } });

export const getDinner = async (token) =>
  API.get("/getDinner", { headers: { auth: token } });

export const deleteBreakfast = async (id, token) =>
  API.delete(`/deleteBreakfast?id=${id}`, { headers: { auth: token } });
export const deleteLunch = async (id, token) =>
  API.delete(`/deleteLunch?id=${id}`, { headers: { auth: token } });
export const deleteSnakes = async (id, token) =>
  API.delete(`/deleteSnakes?id=${id}`, { headers: { auth: token } });
export const deleteDinner = async (id, token) =>
  API.delete(`/deleteDinner?id=${id}`, { headers: { auth: token } });

export const updateGoal = async (values, token) =>
  API.put("/updateGoal", values, { headers: { auth: token } });
