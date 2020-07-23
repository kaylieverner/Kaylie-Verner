import React from 'react';
import { BrowserRouter, Router, Link, Switch, Route } from 'react-router-dom'; 
import Home from './Home.js';  
// import { Box, Button, Heading, Grommet } from 'grommet';
import "./App.css";

// const theme = {
//   global: {
//     colors: {
//       brand: '#228BE6'
//     },
//     font: {
//       family: 'Roboto',
//       size: '18px',
//       height: '20px',
//     },
//   },
// };

function App() {
  return (
  <BrowserRouter>
      <Route exact path="/" component={Home} />                
  </BrowserRouter>
  );
}
 
export default App;