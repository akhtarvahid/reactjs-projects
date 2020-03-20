import axios from 'axios';
import $ from 'jquery';
import { GET_POSTS
          } from './types';

var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
url += '?' + $.param({
  'api-key': "6232faf1d84b4fa5af7fbdfab57b6d23"
});

// Get Posts
export const getPosts = () => dispatch => {
    axios
    .get(url)
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data.results
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};
