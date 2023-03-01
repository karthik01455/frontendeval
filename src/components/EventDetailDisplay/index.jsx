import React, { useContext, useEffect, useState } from 'react';
import './eventListDispay.css';
import { EventDataContext } from '../../contexts/EventData';
import makeRequest from '../../utils/makeRequest';
import { PATCH_EVENTS } from '../../constants/apiEndPoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBookmark,
  faCircleXmark,
  faBookBookmark,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
export default function EventDetailDisplay() {
  const [bookMarked, setBookMarked] = useState(value.isBookmarked);
  const { eventData, setEventData } = useContext(EventDataContext);
  const { event, setEvent } = useContext(EventDataContext);
  const value = event;
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
  return (
    <div className='ed-container'>
      <div
        className='el-card'
        key={value.id}
        onClick={() => {
          setEvent(value);
        }}
      >
        <div className='el-image-container'>
          <img className='el-image' src={value.imgUrl}></img>
        </div>

        <div className='el-card-text'>
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
                data: { isBookmarked: !value.isBookmarked },
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
    </div>
  );
}
