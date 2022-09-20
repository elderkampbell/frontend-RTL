import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />);
  const AboutPage = screen.getByRole('heading', { name: /about pokédex/i });

  expect(AboutPage).toBeInTheDocument();
});

test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const tagsP = screen.getAllByText(/Pokémons/i);
  expect(tagsP.length).toEqual(2);
});

test('Testa se a página contém a imagem de uma Pokédex', () => {
  renderWithRouter(<About />);
  const imageURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const image = screen.getByRole('img', { name: /pokédex/i });
  expect(image).toHaveProperty('src', imageURL);
});
