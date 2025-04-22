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

  return <h4>Carregando...</h4>;
}
