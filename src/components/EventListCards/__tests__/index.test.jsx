import React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import EventListCards from '..';
import makeRequest from '../../../utils/makeRequest';
import { mockData } from '../../../mocks/mockData';
import { ThemeContext } from '../../../contexts/Theme';
import { EventDataContext } from '../../../contexts/EventData';
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));
jest.mock('../../../utils/makeRequest');
describe('EvenListCards', () => {
  test('should render the same snapshot when it is called ', () => {
    makeRequest.mockResolvedValue(mockData);
    const { container } = render(
      <EventDataContext.Provider
        value={{
          bookData: null,
          setBookData: jest.fn(),
        }}
      >
        <EventListCards value={mockData[0]} />
      </EventDataContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
describe('EvenListCards', () => {
  test('should render the card correctly when correct data is passed ', () => {
    makeRequest.mockResolvedValue(mockData);
    const { container } = render(
      <EventDataContext.Provider
        value={{
          bookData: null,
          setBookData: jest.fn(),
        }}
      >
        <EventListCards value={mockData[0]} />
      </EventDataContext.Provider>
    );
    expect(screen.getByTestId('card')).toBeTruthy();
  });
});
