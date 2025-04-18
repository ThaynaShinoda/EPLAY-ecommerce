import { useParams } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Gallery } from '../../components/Gallery';
import hogwarts from '../../assets/images/hogwarts_galeria.png';
import { useEffect, useState } from 'react';
import { Game } from '../Home';

export function Product() {
  const { id } = useParams();

  const [game, setGame] = useState<Game>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((rest) => rest.json())
      .then((res) => setGame(res));
  }, [id]);

  if (!game) {
    return <h3>Carregando...</h3>;
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b>
          {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery defaultCover={game.media.cover} gameName={game.name} items={game.media.gallery}/>
    </>
  );
}
