import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();
export function ContextController({ children }) {
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
