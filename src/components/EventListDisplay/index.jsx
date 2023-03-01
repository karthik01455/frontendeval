import React, { useContext, useEffect, useState } from 'react';
import './eventListDispay.css';
import '../../styles/padding.css';
import { EventDataContext } from '../../contexts/EventData';
import makeRequest from '../../utils/makeRequest';
import EventListCards from '../EventListCards';
import {
  GET_EVENTS,
  PATCH_EVENTS_LIKE,
  GET_EVENTS_ID,
  GET_THEME,
  PUT_THEME,
} from '../../constants/apiEndPoints';
export default function EventListDisplay() {
  const { eventData, setEventData } = useContext(EventDataContext);
  useEffect(() => {
    makeRequest(GET_EVENTS).then((res) => {
      setEventData(res);
      console.log(res);
    });
  }, []);
  const displayData = eventData;
  return displayData ? (
    <div className='el-container padding'>
      <div className='el-header'>
        <div className='el-left'></div>
        <div className='el-right'>
          <div className='el-search'>
            <div className='el-bookmarks'></div>
          </div>
        </div>
      </div>
      <div className='el-list-container'>
        {displayData.map((value) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <EventListCards value={value} key={value.id} />
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
