import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../redux/slices/cart';

import { HeaderBar, CartButton, LinkItem, Links } from './styles';
import logo from '../../assets/images/logo.svg';
import carrinho from '../../assets/images/carrinho.svg';
import { RootReducer } from '../../redux/store';

export function Header() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  function openCart() {
    dispatch(open());
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  );
}
