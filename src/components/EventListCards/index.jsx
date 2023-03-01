/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import makeRequest from '../../utils/makeRequest';
import { EventDataContext } from '../../contexts/EventData';
import { ThemeContext } from '../../contexts/Theme';
('../../utils/makeRequest');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import './eventListCards.css';
import { PATCH_EVENTS } from '../../constants/apiEndPoints';
import {
  faBookmark,
  faCircleXmark,
  faBookBookmark,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

export default function EventListCards({ value }) {
  const navigate = useNavigate();
  const date = new Date(value.datetime);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month = months[date.getMonth()];
  const dateEvent = date.getDate();
  const year = date.getFullYear();
  const timeZone = date.getTimezoneOffset();
  const time = date.getTime();
  const [bookMarked, setBookMarked] = useState(value.isBookmarked);
  const { eventData, setEventData } = useContext(EventDataContext);
  const { event, setEvent } = useContext(EventDataContext);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      data-testid='card'
      className='el-card'
      key={value.id}
      style={{ backgroundColor: theme }}
    >
      <div
        className='el-image-container'
        onClick={() => {
          setEvent(value);
          navigate(`/eventDetails`);
        }}
      >
        <img className='el-image' src={value.imgUrl}></img>
      </div>

      <div
        className='el-card-text'
        onClick={() => {
          setEvent(value);
          navigate(`/eventDetails`);
        }}
      >
        <div className='el-card-name'>{value.name}</div>
        <div className='el-card-description'>{value.description}</div>
        <div className='el-card-text-footer'>
          <div>VENUE:{value.venue}</div>
          <div>
            DATE:{dateEvent} {month} {year} {time}
          </div>
        </div>
      </div>
      <div className='el-card-footer'>
        <div className='el-card-registered'>
          {/* <FontAwesomeIcon icon={value.isRegistered ? faCircleCheck : null} /> */}
          {/* <div>{value.isRegistered ? 'REGISTERED' : null}</div> */}
          <div className='el-card-seat'>
            <FontAwesomeIcon
              icon={
                !value.areSeatsAvailable && !value.isRegistered
                  ? faCircleXmark
                  : faCircleCheck
              }
            />
          </div>

          <div>
            {!value.isRegistered && !value.areSeatsAvailable
              ? 'NO SEATS AVAILABLE'
              : null}
          </div>
        </div>
        <div
          className='el-card-bookmark'
          onClick={() => {
            makeRequest(PATCH_EVENTS(value.id), {
              data: { isBookmarked: !bookMarked },
            }).then((res) => {
              const eventDataChange = [...eventData];
              const recordIndex = eventDataChange.findIndex(
                (record) => record.id === res.id
              );
              eventDataChange[recordIndex]
                ? (eventDataChange[recordIndex].isBookmarked =
                    !eventDataChange[recordIndex].isBookmarked)
                : null;
              setEventData(eventDataChange);
              setBookMarked(!bookMarked);
            });
          }}
        >
          <FontAwesomeIcon icon={bookMarked ? faBookmark : faBookBookmark} />
        </div>
      </div>
    </div>
  );
}
