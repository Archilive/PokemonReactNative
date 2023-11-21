import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BASE_URL } from '../hooks/useGetAllCards';

export const useGetCardById = (id: number) => {
  return useQuery({
    queryKey: ['card'],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/pokemon/${id}`);
      const data = await response.json();
      return data;
    },
  });
};
