import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Testa se a página contém heading h2 com o texto Page requested not found', () => {
  renderWithRouter(<NotFound />);
  const nothingFound = screen.getByRole('heading', { name: /page requested not found/i });
  expect(nothingFound).toBeInTheDocument();
});

test('Testa se a página mostra a imagem do pikachu chorando', () => {
  renderWithRouter(<NotFound />);
  const imageURL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  const image = screen.getByRole('img', {
    name: /pikachu crying because the page requested was not found/i,
  });
  expect(image).toHaveProperty('src', imageURL);
});
