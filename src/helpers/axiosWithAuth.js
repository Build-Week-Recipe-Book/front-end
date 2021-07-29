import { axiosWithAuth } from "./axiosWithAuth";

export const fetchFoods = () => {
    return axiosWithAuth()
    .get("/...")
    .then((res) => res)
    .catch((err) =>err);
};