import styled from 'styled-components';
import { TagContainer } from '../Tag/styles';

export const Imagem = styled.div`
  width: 100%;
  height: 35rem;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .wrapper {
    position: relative;
    padding-top: 21.25rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 2rem;
  }
`;

export const Titulo = styled.h2`
  font-size: 2.25rem;
  max-width: 28.125rem;
`;

export const Precos = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;

  span {
    text-decoration: line-through;
  }
`;
