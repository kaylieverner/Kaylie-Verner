import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js';  
import About from './About.js'; 
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
 tag='header'
 direction='row'
 align='center'
 justify='between'
 background='brand'
 pad={{ left: 'medium', right: 'small', vertical: 'small' }}
 elevation='medium'
 style={{ zIndex: '1' }}
 {...props}
 />);

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={theme} full>
        <Box fill>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
     <Box flex align='right' justify='center'>
       <p>Kaylie Verner</p>
       <p>Full Stack Web Developer</p>
     </Box>
   </Box>
   <AppBar>
          <Heading level='3' margin='none'>Portfolio</Heading>
          <Button icon={<Notification/>}></Button>
          <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
                             
            <Link to="/" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
        </AppBar>
      
        </Box>
        </Grommet>
    </BrowserRouter>
  );
}
 
export default App;