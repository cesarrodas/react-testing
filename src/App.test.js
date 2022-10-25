import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color, and updates when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: "Change to blue"});

  // expect bg to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})
  expect(colorButton).toHaveTextContent("Change to red")
});

test('initial confitions', () => {
  render(<App/>)
  
  // check that button is enabled 
  const colorButton = screen.getByRole('button', { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  // check that checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});

test('checkbox disables button on first click and enables on second.', () => {
  render(<App/>)
  
  const colorButton = screen.getByRole('button', { name: "Change to blue" });
  const checkbox = screen.getByRole('checkbox', { name: "Disable button" });

  fireEvent.click(checkbox);

  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkbox);

  expect(colorButton).toBeEnabled();
})