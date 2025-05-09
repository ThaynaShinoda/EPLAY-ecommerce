import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RootReducer } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

import { open } from '../../redux/slices/cart';

import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/carrinho.svg';

import {
  HeaderBar,
  CartButton,
  LinkItem,
  Links,
  MenuMobile,
  HeaderRow,
  NavMobile,
} from './styles';

export function Header() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openCart() {
    dispatch(open());
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <MenuMobile onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </MenuMobile>
          <Link to="/">
            <img src={logo} alt="Logo EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#comming-soon"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cart} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#comming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  );
}
