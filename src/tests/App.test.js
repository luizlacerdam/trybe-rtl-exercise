import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
//import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testes da aplicação', () => {
  /*
    Conforme os testes forem concluídos, remova o 'todo' dos testes para garantir que os
    mesmos sejam executados.
  */

  test('1 - Conferir se o título "Par ou Ímpar" aparece na página.', () => {
    renderWithRouter(<App />)
    const parouimpa = screen.getByRole('heading', {name: 'Par ou Ímpar'})
    expect(parouimpa).toBeInTheDocument();
  });
  //Neste teste você deseja visualizar o elemento com o título.
  //Não esqueça de conferir o código da aplicação para entender o contexto.

  test('2 - Acessando a partir da Home a página About.', () => {
    renderWithRouter(<App />)
    const linkAbout = screen.getByRole('link', { name: 'Sobre'})
    userEvent.click(linkAbout)
    const titleAbout = screen.getByRole('heading', { level: 1, nome: 'Sobre o Par ou Ímpar'})
    expect(titleAbout).toHaveTextContent(/sobre o par ou Ímpar/i)
  });
  //Neste teste você deseja trabalhar com a navegação de rotas.
  //Você pode utilizar os links da própria tela para isso.

  test('3 - Disparar a mensagem de "Página não encontrada" ao acessar uma rota inválida.', () => {
    const { history } = renderWithRouter(<App />)
    history.push('/xablau')
  });
  //Neste teste você deseja acessar uma rota inválida.

  test.todo('4 - Validar a existência de 2 botões na tela.');
  //Neste teste você deseja validar a existência dos botões 'Par' ou 'Ìmpar'.

  test.todo('5 - Conferir se o jogo retorna a mensagem "Acertou" ao clicar na opção correta.');
  //Talvez você prefira controlar as possibilidades neste teste.

  test.todo('6 - Conferir se o jogo retorna a mensagem "Errou" ao clicar na opção incorreta.');
  //Talvez você prefira controlar as possibilidades neste teste.

  test.todo('7 - Conferir se um número é gerado na tela do jogo.');
  //Talvez você prefira controlar as possibilidades neste teste.
});