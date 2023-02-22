import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';


const Shop = () => {
  return <h1>I am the shop page</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
