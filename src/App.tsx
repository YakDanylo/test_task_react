import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import FavouritePage from './pages/FavouritePage';
import {Routes,Route} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import "./styles/global.css"
function App() {
  return (
    <RecoilRoot>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='favourite' element={<FavouritePage/>}></Route>
    </Routes>
    </RecoilRoot>
  );
}

export default App;
