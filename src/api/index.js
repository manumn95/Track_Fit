import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const userSignUp = async (data)=>API.post("/signUp",data);
export const userLogIn = async (data)=>API.post('/login',data);