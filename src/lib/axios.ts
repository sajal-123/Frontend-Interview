import axios from "axios";
import { API_URL } from "./constants";
export const api = axios.create({ baseURL: API_URL, withCredentials: false, });
api.interceptors.response.use(res => res, err => Promise.reject(err.response?.data || err));
