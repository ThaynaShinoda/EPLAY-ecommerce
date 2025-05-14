import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { TagContainer } from '../Tag/styles';
import { ButtonContainer } from '../Button/styles';
import close from '../../assets/images/botao_close.png';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${colors.gray};
  z-index: 1;
  padding: 2.5rem 1rem 0 1rem;
  max-width: 22.5rem;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: ${colors.white};
    text-align: center;
  }
`;

export const Prices = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  color: ${colors.white};
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: block;
    font-size: 0.75rem;
    color: ${colors.gray100};
  }
`;

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: ${colors.white};
  margin-top: 2rem;
`;

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.gray100};
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 1.5rem;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 1rem;
  }

  span {
    display: block;
    color: ${colors.white};
    font-weight: bold;
    font-size: 0.875rem;
  }

  ${TagContainer} {
    margin: 0.5rem 0.5rem 1rem 0;
  }

  button {
    background-image: url(${close});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0;
  }
`;
