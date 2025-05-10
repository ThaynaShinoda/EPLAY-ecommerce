import { ProductsList } from '../../components/ProductsList';
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
} from '../../services/api';

export function Categories() {
  const { data: gameAction, isLoading: isLoadingAction } =
    useGetActionGamesQuery();
  const { data: gameSports, isLoading: isLoadingSports } =
    useGetSportsGamesQuery();
  const { data: gameSimulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery();
  const { data: gameFight, isLoading: isLoadingFight } =
    useGetFightGamesQuery();
  const { data: gameRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery();

  return (
    <>
      <ProductsList
        id="action"
        games={gameAction}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        games={gameSports}
        title="Esportes"
        background="gray"
        isLoading={isLoadingSports}
      />
      <ProductsList
        id="fight"
        games={gameFight}
        title="Luta"
        background="black"
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        games={gameRpg}
        title="RPG"
        background="gray"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="simulation"
        games={gameSimulation}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
    </>
  );
}
