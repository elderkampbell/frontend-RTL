import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Testa se ao clicar no botão de tipo o pokemon correto é exibido.', () => {
  renderWithRouter(<App />);
  const electric = screen.getByRole('button', { name: /electric/i });
  userEvent.click(electric);
  const img = screen.getByRole('img', { name: /pikachu sprite/i });
  expect(img).toBeInTheDocument();
});

test('Testa se o botão moreDetails exibe as informações corretas.', () => {
  renderWithRouter(<App />);
  const moreDetails = screen.getByRole('link', { name: /more details/i });
  userEvent.click(moreDetails);
  const location = screen.getByText(/kanto viridian forest/i);
  expect(location).toBeInTheDocument();

  const favoriteCheck = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
  userEvent.click(favoriteCheck);
  const starImg = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(starImg).toBeInTheDocument();
  expect(starImg).toHaveProperty('src', 'http://localhost/star-icon.svg');
  expect(starImg).toHaveProperty('alt', 'Pikachu is marked as favorite');

  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType).toHaveTextContent('Electric');

  const pokemonSprite = screen.getByRole('img', { name: /pikachu sprite/i });
  const spriteURL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
  expect(pokemonSprite).toHaveProperty('src', spriteURL);
  expect(pokemonSprite).toHaveProperty('alt', 'Pikachu sprite');
});
