import { API_URL } from "./constant"

export const fetchApi = (searchedText) => {
     return fetch(`${API_URL}${searchedText}`).then(res=> res.json())
 }