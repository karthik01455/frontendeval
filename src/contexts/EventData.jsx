/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const EventDataContext = createContext({});

export function EventDataProvider({ children }) {
  const [eventData, setEventData] = useState(null);
  const [search, setSearch] = useState(null);

  return (
    <EventDataContext.Provider
      value={{
        eventData,
        setEventData,
        search,
        setSearch,
      }}
    >
      {children}
    </EventDataContext.Provider>
  );
}
