import { useDispatch } from 'react-redux';
import { add, open } from '../../redux/slices/cart';
import { formatPrice } from '../../utils/index';

import { Game } from '../../pages/Home';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { Banner, Infos } from './styles';

type Props = {
  game: Game;
};

export function Hero({ game }: Props) {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(game));
    dispatch(open());
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="wrapper">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  );
}
