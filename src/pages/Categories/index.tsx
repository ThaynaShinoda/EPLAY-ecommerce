import { ProductsList } from '../../components/ProductsList';
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
} from '../../services/api';

export function Categories() {
  const { data: gameAction } = useGetActionGamesQuery();
  const { data: gameSports } = useGetSportsGamesQuery();
  const { data: gameSimulation } = useGetSimulationGamesQuery();
  const { data: gameFight } = useGetFightGamesQuery();
  const { data: gameRpg } = useGetRpgGamesQuery();

  if (gameAction && gameSports && gameSimulation && gameFight && gameRpg) {
    return (
      <>
        <ProductsList
          id="action"
          games={gameAction}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="sports"
          games={gameSports}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          id="fight"
          games={gameFight}
          title="Luta"
          background="black"
        />
        <ProductsList id="rpg" games={gameRpg} title="RPG" background="gray" />
        <ProductsList
          id="simulation"
          games={gameSimulation}
          title="Simulação"
          background="black"
        />
      </>
    );
  }

  return <h4>Carregando...</h4>;
}
