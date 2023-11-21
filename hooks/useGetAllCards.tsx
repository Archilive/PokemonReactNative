import { useQuery } from '@tanstack/react-query';
import React from 'react';

export type Card = {
  pokedexId: number;
  generation: number;
  category: string;
  name: {
    fr: string;
    en: string;
    jp: string;
  };

  sprites: {
    regular: string;
    shiny: string;
    gmax: string | null;
  };
  types: {
    name: string;
    image: string;
  }[];
  talents: {
    name: string;
    tc: boolean;
  }[];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  resistances: {
    name: string;
    multiplier: number;
  }[];
  evolution: {
    pre: null;
    next: {
      pokedexId: number;
      name: string;
      condition: string;
    }[];
    mega: null;
  };
  height: string;
  weight: string;
  egg_groups: string[];
  sexe: {
    male: number;
    female: number;
  };
  catch_rate: number;
  level_100: number;
  forme: null;
};

export const BASE_URL = 'https://tyradex.vercel.app/api/v1';

export const useGetAllCards = () => {
  const { data, ...rest } = useQuery<Card[]>({
    queryKey: ['cards'],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/pokemon`);
      return response.json();
    },
  });

  const filterData = data
    ? data.filter((card) => card.generation === 1 && card.pokedexId !== 0)
    : [];
  return { data: filterData, ...rest };
};
