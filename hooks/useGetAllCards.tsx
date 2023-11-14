import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';

type Card = {
  id: string;
  localId: string;
  name: {
    fr: string;
    en: string; 
  };
  image: string;
};

export const BASE_URL = 'https://tyradex.vercel.app/api/v1';

export const useGetAllCards = () => {
  return useQuery<Card[]>({
    queryKey: ['cards'],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/pokemon`);
      return response.json();
    },
  });
};
