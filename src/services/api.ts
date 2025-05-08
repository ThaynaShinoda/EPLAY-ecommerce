import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Game } from '../pages/Home';
import { number } from 'yup';

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  billing: {
    name: string;
    email: string;
    document: string;
  };
  delivery: {
    email: string;
  };
  payment: {
    card: {
      active: boolean;
      owner?: {
        name: string;
        document: string;
      };
      name?: string;
      number?: string;
      expires?: {
        month: number;
        year: number;
      };
      code?: number;
    };
    installments: number;
  };
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay',
  }),
  endpoints: (builder) => ({
    // Banner
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque',
    }),

    //Home
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes',
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve',
    }),

    //Categories
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao',
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => 'esportes',
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao',
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta',
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg',
    }),

    //Product
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`,
    }),

    //POST
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
  useGetGameQuery,
  usePurchaseMutation,
} = api;
