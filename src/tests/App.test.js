import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Testa se o primeiro link deve possuir o texto Home', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('link', { name: /home/i });

  expect(home).toBeInTheDocument();
});

test('Testa se o primeiro link deve possuir o texto About', () => {
  renderWithRouter(<App />);
  const about = screen.getByRole('link', { name: /about/i });

  expect(about).toBeInTheDocument();
});

test('Testa se o primeiro link deve possuir o texto Favorite Pokémons', () => {
  renderWithRouter(<App />);
  const favorite = screen.getByRole('link', { name: /favorite pokémons/i });

  expect(favorite).toBeInTheDocument();
});
