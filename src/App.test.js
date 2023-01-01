import { render, screen } from '@testing-library/react';
import Context from './Context';

test('renders learn react link', () => {
  render(<Context />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
