import React, { useContext, useEffect, useState } from 'react';
import './eventListDispay.css';
import '../../styles/padding.css';
import { EventDataContext } from '../../contexts/EventData';
import makeRequest from '../../utils/makeRequest';
import EventListCards from '../EventListCards';
import DropDown from '../DropDown';
import {
  GET_EVENTS,
  PATCH_EVENTS,
  GET_EVENTS_ID,
  GET_THEME,
  PUT_THEME,
} from '../../constants/apiEndPoints';
export default function EventListDisplay() {
  const { eventData, setEventData } = useContext(EventDataContext);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const { search, setSearch } = useContext(EventDataContext);
  useEffect(() => {
    makeRequest(GET_EVENTS).then((res) => {
      setEventData(res);
      console.log(res);
    });
  }, []);

  let displayData = eventData;
  displayData =
    eventData && eventData.length
      ? displayData.sort((a, b) => {
          if (a.datetime < b.datetime) {
            return -1;
          }
        })
      : [];
  displayData =
    search && search !== ''
      ? displayData.filter((value) => {
          return value.name.includes(search);
        })
      : displayData;
  return displayData ? (
    <div className='el-container padding'>
      <div className='el-header'>
        <div className='el-left'></div>
        <div className='el-right'>
          <div className='el-search'>
            <div className='search-bar'>
              <input value={search} onChange={handleSearchChange}></input>
            </div>
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
