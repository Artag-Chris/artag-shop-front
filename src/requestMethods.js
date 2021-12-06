import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2M1NjRmNDJmZmZiZTMwOTU5NWVjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjQ4Nzc3NX0.vQclQmcLwV9XYl0HN_pBJrv2Qg8ejbhNH2n83uw1jNs"
 

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});