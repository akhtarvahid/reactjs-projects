import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.component';

const Navigation = () => {
  return (
    <div>
      <div>
      <h1>I am the Navigation bar</h1> 
      </div>
     <Outlet />
    </div>
  )
}
const Shop = () => {
  return <h1>I am the shop page</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
       <Route path='/home' element={<Home />} />
       <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
