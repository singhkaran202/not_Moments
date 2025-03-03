import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/plus-jakarta-sans';
import Home from './pages/home';
import Events from './pages/events';
import CampusAmb from './pages/campus-amb.jsx';
import Workshop from './pages/workshop';
import Guestlecture from './pages/gl';
import Navbar from './components/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './components/customtheme.js';

// const theme= extendTheme({body:'monospace'},)

function App() {

   return (

    
    <ChakraProvider theme={theme}>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/:page" element={<Navbar />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/workshop" element={<Workshop />} />
          <Route exact path="/guestlectures" element={<Guestlecture />} />
          <Route exact path="/ca" element={<CampusAmb />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
