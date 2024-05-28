import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const userSignUp = async (data)=>API.post("/signUp",data);
export const userLogIn = async (data)=>API.post('/login',data);
export const userGoal = async (data,token)=>API.post('/goal',data,{headers:{auth:token}});
export const userExercise = async (data,token)=>API.post('/exercise',data,{headers:{auth:token}})
export const breakfast = async (data,token)=>API.post('/breakfast',data,{headers:{auth:token}})
export const lunch = async (data,token)=>API.post('/lunch',data,{headers:{auth:token}})
export const snakes = async (data,token)=>API.post('/snakes',data,{headers:{auth:token}})
export const dinner = async (data,token)=>API.post('/dinner',data,{headers:{auth:token}})
export const getGoal = async (token)=>API.get('/getGoals',{headers:{auth:token}})
export const getWorkouts=async(token)=>API.get('/workouts',{headers:{auth:token}})