import type { Diary, NewDiary } from "./types";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/diaries";

const getAll = () => {
  return axios.get<Diary[]>(baseUrl).then((res) => res.data);
};

const create = (object: NewDiary) => {
  return axios.post<Diary>(baseUrl, object).then((res) => res.data);
};

export default { getAll, create };
