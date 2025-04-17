import { useEffect, useState } from 'react';
import { ProductsList } from '../../components/ProductsList';

import { Game } from '../Home';

export function Categories() {
  const [gameAction, setGameAction] = useState<Game[]>([]);
  const [gameSports, setGameSports] = useState<Game[]>([]);
  const [gameSimulation, setGameSimulation] = useState<Game[]>([]);
  const [gameFight, setGameFight] = useState<Game[]>([]);
  const [gameRpg, setGameRpg] = useState<Game[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAction(res));

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameSports(res));

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulation(res));

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameFight(res));

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res));
  }, []);
  return (
    <>
      <ProductsList games={gameAction} title="Ação" background="black" />
      <ProductsList games={gameSports} title="Esportes" background="gray" />
      <ProductsList games={gameFight} title="Luta" background="black" />
      <ProductsList games={gameRpg} title="RPG" background="gray" />
      <ProductsList
        games={gameSimulation}
        title="Simulação"
        background="black"
      />
    </>
  );
}
