import React from 'react';
import './EventDetails.css';
import Header from '../../components/Header';
import EventDetailDisplay from '../../components/EventDetailDisplay';
import '../../styles/padding.css';
export default function Home() {
  return (
    <div className='home-container'>
      <div className='header'>
        <Header />
      </div>
      <div className='event-body-container'>
        <EventDetailDisplay />
      </div>
      <div className='footer'></div>
    </div>
  );
}
