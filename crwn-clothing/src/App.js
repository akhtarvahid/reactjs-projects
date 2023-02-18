import React from 'react';
import './App.css';
import data from './data.json'
import Directory from './components/directory/directory.component';

const App = () => {


  return (
    <Directory data={data} />
  );
}

export default App;
