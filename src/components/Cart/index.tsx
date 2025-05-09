import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootReducer } from '../../redux/store';

import { Button } from '../Button';
import { Tag } from '../Tag';

import { close, remove } from '../../redux/slices/cart';
import { formatPrice, getTotalPrice } from '../../utils/index';
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar,
} from './styles';

export function Cart() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  function removeItem(id: number) {
    dispatch(remove(id));
  }

  function goToCheckout() {
    navigate('/checkout');
    closeCart();
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice(items))}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  );
}
