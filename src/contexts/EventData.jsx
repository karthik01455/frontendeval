/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const EventDataContext = createContext({});

export function EventDataProvider({ children }) {
  const [eventData, setEventData] = useState(null);
  const [event, setEvent] = useState({});
  return (
    <EventDataContext.Provider
      value={{
        eventData,
        setEventData,
        event,
        setEvent,
      }}
    >
      {children}
    </EventDataContext.Provider>
  );
}
