import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import EventListDisplay from '../../components/EventListDisplay';
import '../../styles/padding.css';
export default function Home() {
  return (
    <div className='home-container'>
      <div className='header'>
        <Header />
      </div>
      <div className='event-body-container'>
        <EventListDisplay />
      </div>
      <div className='footer'></div>
    </div>
  );
}
