import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import '../../styles/padding.css';
import { ThemeContext } from '../../contexts/Theme';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <header style={{ backgroundColor: theme }} className='padding'>
        EVENTIFY
      </header>
    </div>
  );
}
