import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import './App.css';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume/Resume';
import Contact from './components/Contact/Contact'; // Corrected import path
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container className={'top_60'}>
      <Box mt={8}> {/* Add margin-top to create space from the top */}
        <Grid container spacing={3}>
          <Grid 
            item 
            xs={10} 
            sm={10} 
            md={4} 
            lg={3}
            style={{ padding: '20px' }} // Add padding to the Grid item
          >
            <Box mb={2}> {/* Add margin-bottom to create space */}
              <Profile />
            </Box>
          </Grid>
          <Grid item xs style={{ paddingLeft: '20px' }}> {/* Add padding to the Grid item */}
            <Box mb={2}> {/* Add margin-bottom to create space */}
              <Router>
                <Header />
                <Routes>
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} /> {/* Ensure Contact component is wrapped in JSX */}
                </Routes>
                <Footer />
              </Router>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
