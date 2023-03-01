import React from 'react';
import Home from './pages/Home';
import EventDetails from '../src/pages/EventDetails';
import './App.css';
import { EventDataProvider } from './contexts/EventData';
import { ThemeProvider } from './contexts/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <EventDataProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/eventDetails' element={<EventDetails />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </EventDataProvider>
    </div>
  );
}

export default App;
