import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Testa se a página contém heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const Encountered = screen.getByRole('heading', { name: /encountered pokémons/i });
  expect(Encountered).toBeInTheDocument();
});

test('Testa se o botão contém o texto Próximo pokémon', () => {
  renderWithRouter(<App />);
  const btn = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(btn).toHaveTextContent('Próximo pokémon');
});

test('Clica no botão e confere se o pokémon muda', () => {
  renderWithRouter(<App />);
  const btn = screen.getByRole('button', { name: /próximo pokémon/i });
  userEvent.click(btn);
  const charmander = screen.getByText(/charmander/i);
  expect(charmander).toBeInTheDocument();
  userEvent.click(btn);
  const caterpie = screen.getByText(/caterpie/i);
  expect(caterpie).toBeInTheDocument();
  userEvent.click(btn);
  const ekans = screen.getByText(/ekans/i);
  expect(ekans).toBeInTheDocument();
  userEvent.click(btn);
  const alakazam = screen.getByText(/alakazam/i);
  expect(alakazam).toBeInTheDocument();
  userEvent.click(btn);
  const mew = screen.getByText(/mew/i);
  expect(mew).toBeInTheDocument();
  userEvent.click(btn);
  const rapidash = screen.getByText(/rapidash/i);
  expect(rapidash).toBeInTheDocument();
  userEvent.click(btn);
  const snorlax = screen.getByText(/snorlax/i);
  expect(snorlax).toBeInTheDocument();
  userEvent.click(btn);
  const dragonair = screen.getByText(/dragonair/i);
  expect(dragonair).toBeInTheDocument();
  userEvent.click(btn);
  const pikachu = screen.getByText(/pikachu/i);
  expect(pikachu).toBeInTheDocument();
  userEvent.click(btn);
  expect(charmander).toBeInTheDocument();
});

test('Testa se há um botão de filtragem para cada tipo de pokémon, sem repetição', () => {
  renderWithRouter(<App />);
  const pokeTypes = 7;
  const typeBtn = screen.getAllByTestId('pokemon-type-button');
  expect(typeBtn).toHaveLength(pokeTypes);
});

test('Testa se há um botão all', () => {
  renderWithRouter(<App />);
  const allBtn = screen.getByRole('button', { name: /all/i });
  userEvent.click(allBtn);
});

test('Testa se os botões tem os tipos como texto', () => {
  renderWithRouter(<App />);
  const electricBtn = screen.getByRole('button', { name: /electric/i });
  expect(electricBtn).toBeInTheDocument();
});
