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

  const { event, setEvent } = useContext(EventDataContext);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const [filter, setFilter] = useState('All');
  const [filterBookMarked, setFilterBookMarked] = useState(false);
  const [filterSeatsAvailable, setFilterSeatsAvailable] = useState(false);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const [search, setSearch] = useState(null);
  useEffect(() => {
    makeRequest(GET_EVENTS).then((res) => {
      setEventData(res);
      console.log(res);
    });
  }, []);
  const options = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'Registered',
      label: 'Registered',
    },
  ];
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
  displayData =
    filter && filter !== 'All'
      ? displayData.filter((value) => {
          return value.isRegistered === true;
        })
      : displayData;
  displayData = filterBookMarked
    ? displayData.filter((value) => {
        return value.isBookmarked === true;
      })
    : displayData;
  displayData = filterSeatsAvailable
    ? displayData.filter((value) => {
        return value.areSeatsAvailable === true;
      })
    : displayData;

  return displayData ? (
    <div className='el-container padding'>
      <div className='el-header'>
        <div className='el-left'>
          <DropDown options={options} onChange={handleFilterChange}></DropDown>
        </div>
        <div className='el-right'>
          <div className='el-search'>
            <div className='search-bar'>
              <input value={search} onChange={handleSearchChange}></input>
              {'event'}
              {JSON.stringify(event)}
            </div>
            <div className='el-bookmarks'>
              BookMarked{' '}
              <input
                type='radio'
                name='bookmark'
                id='bookmark'
                checked={filterBookMarked}
                onClick={() => {
                  setFilterBookMarked(!filterBookMarked);
                }}
                onChange={() => {
                  setFilterBookMarked(!filterBookMarked);
                }}
              />
              Seats Available{' '}
              <input
                type='radio'
                name='seats'
                id='seats'
                checked={filterSeatsAvailable}
                onClick={() => {
                  setFilterSeatsAvailable(!filterSeatsAvailable);
                }}
                onChange={() => {
                  setFilterSeatsAvailable(!filterSeatsAvailable);
                }}
              />
            </div>
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
