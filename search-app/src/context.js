import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};
export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: "",
    dispatch: action => this.setState(state => reducer(state, action))
  };
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=5&page_size=15&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => setState(res.data.message.body))
      .catch(err => console.log(err));
  }, []);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
