import { render, screen } from '@testing-library/react';
import App from './App';
import Input from './Input';
//ListItem
import ListItem from './ListItem';
import React, {useContext} from 'react';
import {useState} from 'react';
import {Context} from './context';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/mazurkevich/i);
  expect(linkElement).toBeInTheDocument();
});


test('Input', () => {
  render(<Input />);
  const linkElement = screen.getByTestId('testinput');
  expect(linkElement).toBeInTheDocument();
})


test('renders list item',  () => {
  render(<Context.Provider value={{takeMethod}}>
  <ListItem />
    </Context.Provider>
  );
  const linkElement = screen.getByText(/m/i);
  expect(linkElement).toBeInTheDocument();
});