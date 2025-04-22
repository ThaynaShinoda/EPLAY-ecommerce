import { Imagem, Precos, Titulo } from './styles';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { formatPrice } from '../ProductsList';
import { useGetFeaturedGameQuery } from '../../services/api';

export function Banner() {
  const { data: game, isLoading } = useGetFeaturedGameQuery();

  if (!game) {
    return <h3>'Carregando...'</h3>;
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="wrapper">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formatPrice(game.prices.old)}</span>
            <br />
            por apenas {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  );
}
