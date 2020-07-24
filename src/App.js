import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Home from './Home.js';  
import "./App.css";

function App() {
  return (
  <BrowserRouter>
    <Route path='/' component={Home}/>
  </BrowserRouter>
  );
};
 
export default App;