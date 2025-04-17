import { useEffect, useState } from 'react';
import { Banner } from '../../components/Banner';
import { ProductsList } from '../../components/ProductsList';

// import resident from '../../assets/images/resident.png';
// import fifa from '../../assets/images/fifa.png';
// import diablo from '../../assets/images/diablo.png';
// import zelda from '../../assets/images/zelda.png';
// import starWars from '../../assets/images/star_wars.png';
// import streetFighter from '../../assets/images/street_fighter.png';

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     image: resident,
//     infos: ['-10%', 'R$ 250,00'],
//     system: 'Windows',
//     title: 'Resident Evil 4',
//   },
//   {
//     id: 2,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     image: resident,
//     infos: ['-10%', 'R$ 250,00'],
//     system: 'Windows',
//     title: 'Resident Evil 4',
//   },
//   {
//     id: 3,
//     category: 'Esporte',
//     description:
//       'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
//     image: fifa,
//     infos: ['-50%', 'R$ 99,90'],
//     system: 'PS5',
//     title: 'FIFA 23',
//   },
//   {
//     id: 4,
//     category: 'Esporte',
//     description:
//       'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
//     image: fifa,
//     infos: ['-50%', 'R$ 99,90'],
//     system: 'PS5',
//     title: 'FIFA 23',
//   },
// ];

// const emBreve: Game[] = [
//   {
//     id: 1,
//     category: 'RPG',
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
//     image: diablo,
//     infos: ['05/04'],
//     system: 'Windows',
//     title: 'Diablo 4',
//   },
//   {
//     id: 2,
//     category: 'Aventura',
//     description:
//       'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
//     image: starWars,
//     infos: ['05/04'],
//     system: 'Windows',
//     title: 'Star Wars Jedi Survivor',
//   },
//   {
//     id: 3,
//     category: 'Luta',
//     description:
//       'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
//     image: streetFighter,
//     infos: ['05/04'],
//     system: 'Windows',
//     title: 'Street Fighter 6',
//   },
//   {
//     id: 4,
//     category: 'RPG',
//     description:
//       'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
//     image: zelda,
//     infos: ['05/04'],
//     system: 'Switch',
//     title: 'The Legend of Zelda - TOK',
//   },
// ];

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
}

export type Game = {
  id: number;
  name: string;
  description: string;
  release_date?: string;
  prices: {
    discount?: number;
    old?: number;
    current: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: GalleryItem[];
  };
};

export function Home() {
  const [promo, setPromo] = useState<Game[]>([]);
  const [comingSoon, setComingSoon] = useState<Game[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((rest) => rest.json())
      .then((res) => setPromo(res));

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((rest) => rest.json())
      .then((res) => setComingSoon(res));
  }, []);

  return (
    <>
      <Banner />
      <ProductsList games={promo} title="Promoções" background="gray" />
      <ProductsList games={comingSoon} title="Em breve" background="black" />
    </>
  );
}
