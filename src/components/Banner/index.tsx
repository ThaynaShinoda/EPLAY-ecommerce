import { Imagem, Precos, Titulo } from './styles';
import banner from '../../assets/images/banner-homem-aranha.png';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import { Game } from '../../pages/Home';
import { formatPrice } from '../ProductsList';
export function Banner() {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((rest) => rest.json())
      .then((res) => setGame(res));
  }, []);

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
          to="/produto"
          title="Clique aqui para aproveitar oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  );
}
