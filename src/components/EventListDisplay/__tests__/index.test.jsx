import React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import EventListDisplay from '..';
import makeRequest from '../../../utils/makeRequest';
import { mockData } from '../../../mocks/mockData';
import { ThemeContext } from '../../../contexts/Theme';
import { EventDataContext } from '../../../contexts/EventData';
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));
jest.mock('../../../utils/makeRequest');
describe('EvenListDisplay', () => {
  test('should render the same snapshot when it is called ', () => {
    makeRequest.mockResolvedValue(mockData);
    const { container } = render(
      <EventDataContext.Provider
        value={{
          eventData: mockData,
          setEventData: jest.fn(),
        }}
      >
        <EventListDisplay />
      </EventDataContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
describe('EvenListDisplay', () => {
  test('should render the cards when it eventData is set ', () => {
    makeRequest.mockResolvedValue(mockData);
    const { container } = render(
      <EventDataContext.Provider
        value={{
          eventData: mockData,
          setEventData: jest.fn(),
        }}
      >
        <EventListDisplay />
      </EventDataContext.Provider>
    );
    expect(screen.getAllByTestId('card')).toBeTruthy();
  });
});
