import React, { useContext, useEffect, useState } from 'react';
import './eventdetaildisplay.css';
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
  const { eventData, setEventData } = useContext(EventDataContext);
  const { event, setEvent } = useContext(EventDataContext);
  const value = event;
  console.log('v%', JSON.stringify(value));
  const date = new Date(value.datetime);
  const [bookMarked, setBookMarked] = useState(value.isBookmarked);

  const [registered, setRegistered] = useState(value.isRegistered);
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
    <div className='event-detail-container'>
      <div
        className='event-detail-card'
        key={value.id}
        onClick={() => {
          setEvent(value);
        }}
      >
        <div className='event-detail-image-container'>
          <img className='event-detail-image' src={value.imgUrl}></img>
        </div>

        <div className='event-detail-card-text'>
          <div className='event-detail-card-name'>{value.name}</div>
          <div className='event-detail-card-description'>
            {value.description}
          </div>
          <div className='event-detail-card-text-footer'>
            <div>VENUE:{value.venue}</div>
            <div>
              DATE:{dateEvent} {month} {year} {time}
            </div>
          </div>
        </div>
        <div className='event-detail-card-footer'>
          <div className='event-detail-card-registered'>
            {/* <FontAwesomeIcon icon={value.isRegistered ? faCircleCheck : null} /> */}
            {/* <div>{value.isRegistered ? 'REGISTERED' : null}</div> */}
            <div className='event-detail-card-seat'>
              <FontAwesomeIcon
                className='icon'
                icon={registered ? faCircleCheck : null}
              />
              {registered ? 'REGISTERED' : null}
            </div>

            <div>
              {!value.isRegistered && !value.areSeatsAvailable
                ? 'NO SEATS AVAILABLE'
                : null}
            </div>
          </div>
          <div
            className='event-detail-card-bookmark'
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
            <FontAwesomeIcon
              className='icon'
              icon={bookMarked ? faBookmark : faBookBookmark}
            />
          </div>
        </div>
        <div
          className='register-button'
          onClick={() => {
            makeRequest(PATCH_EVENTS(value.id), {
              data: { isRegistered: !registered },
            }).then((res) => {
              const eventDataChange = [...eventData];
              const recordIndex = eventDataChange.findIndex(
                (record) => record.id === res.id
              );
              eventDataChange[recordIndex]
                ? (eventDataChange[recordIndex].isRegistered =
                    !eventDataChange[recordIndex].isRegistered)
                : null;
              setEventData(eventDataChange);
              setRegistered(!registered);
            });
          }}
        >
          <div className='register-text'>
            {registered ? 'UNREGISTER' : 'REGISTER'}
          </div>
        </div>
      </div>
    </div>
  );
}
