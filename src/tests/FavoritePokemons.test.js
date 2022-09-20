import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

test('Busca No favorite pokemon found, se não houver pokémons favoritos;', () => {
  renderWithRouter(<FavoritePokemons />);
  const noFavs = screen.getByText(/no favorite pokemon found/i);
  if (noFavs) {
    expect(noFavs).toBeInTheDocument();
  } else {
    const favs = screen.getByText(/average weight:/i);
    expect(favs.length).toBeGreaterThan(0);
  }
});
