import { axiosWithAuth } from "./axiosWithAuth";

export const fetchFoods = () => {
    return axiosWithAuth()
    .get("/https://reqres.in/api/users?page=2")
    .then((res) => res)
    .catch((err) =>err);
};