/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './eventListCards.css';
import {
  faBookmark,
  faCircleXmark,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
export default function EventListCards({ value }) {
  return (
    <div className='el-card' key={value.id}>
      <div className='el-image-container'>
        <img className='el-image' src={value.imgUrl}></img>
      </div>

      <div className='el-card-text'>
        <div className='el-card-name'>{value.name}</div>
        <div className='el-card-description'>{value.description}</div>
        <div className='el-card-text-footer'>
          <div>VENUE:{value.venue}</div>
          <div>DATE:{value.datetime}</div>
        </div>
      </div>
      <div className='el-card-footer'>
        <div className='el-card-registered'>
          {' '}
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <div className='el-card-bookmark'>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    </div>
  );
}
