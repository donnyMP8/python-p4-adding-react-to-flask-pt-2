import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movie message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Check the console for a list of movies!/i);
  expect(linkElement).toBeInTheDocument();
});
