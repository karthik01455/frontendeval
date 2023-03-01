import React from 'react';
import Home from './pages/Home';
import './App.css';
import { EventDataProvider } from './contexts/EventData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <EventDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </EventDataProvider>
    </div>
  );
}

export default App;
