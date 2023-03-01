/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './dropdown.css';
export default function DropDown({ onChange, heading, options }) {
  return (
    <div>
      <select onChange={onChange} className='drop-down-container'>
        {options.map((option) => (
          <option className='options' key={option.value} value={option.value}>
            <div className='options'>{option.label}</div>
          </option>
        ))}
      </select>
    </div>
  );
}
