export const fetchApi = (searchedText) => {
     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchedText}`)
    .then(res=> res.json())
 }