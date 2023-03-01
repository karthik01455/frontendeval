/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from 'react';
import './footer.css';
import '../../styles/padding.css';
import { ThemeContext } from '../../contexts/Theme';
import makeRequest from '../../utils/makeRequest';
import { GET_THEME, PUT_THEME } from '../../constants/apiEndPoints';

export default function Footer() {
  const [themeList, setThemeList] = useState(null);
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    makeRequest(GET_THEME, {}).then((res) => {
      setThemeList(res);
      console.log('*', res['themes']);
      let preferredTheme;
      res &&
        res['themes'].map((value) => {
          value.id === res.preferredThemeId ? (preferredTheme = value) : null;
        });
      console.log('****', preferredTheme);
      setTheme(preferredTheme['colorHexCode']);
    });
  }, []);

  console.log(themeList, 'p');
  return themeList ? (
    <div className='footer padding' style={{ backgroundColor: theme }}>
      {/* /<div
        onClick={() => {
          setTheme('black');
        }}
      >
        BLACK
      </div>
      <div
        onClick={() => {
          setTheme('blue');
        }}
      >
        BLUE
      </div>
      <div
        onClick={() => {
          setTheme('#9B9999');
        }}
      >
        GREY
      </div>  */}
      {themeList ? (
        themeList.themes.map((value) => {
          return (
            <div
              onClick={() => {
                setTheme(value.colorHexCode);
                makeRequest(PUT_THEME, { preferredThemeId: value.id }).then(
                  (res) => {}
                );
              }}
              className='box'
              style={{ backgroundColor: value.colorHexCode }}
            ></div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
