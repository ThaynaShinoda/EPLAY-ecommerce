import { Tag } from '../Tag';
import { Button } from '../Button';
import { Loader } from '../Loader';

import { formatPrice } from '../../utils/index';
import { useGetFeaturedGameQuery } from '../../services/api';

import { Image, Prices, Title } from './styles';

export function Banner() {
  const { data: game } = useGetFeaturedGameQuery();

  if (!game) {
    return <Loader />;
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="wrapper">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{formatPrice(game.prices.old)}</span>
            <br />
            por apenas {formatPrice(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  );
}
