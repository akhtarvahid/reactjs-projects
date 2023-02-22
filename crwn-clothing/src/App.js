import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop = () => {
  return <h1>I am the shop page</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='/shop' element={<Shop />} />
       <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
