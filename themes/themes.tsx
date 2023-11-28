import React from 'react';

const typeColors = {
  Acier: '#B8B8D0',
  Combat: '#C03028',
  Insecte: '#A8B820',
  Normal: '#A8A878',
  Poison: '#A040A0',
  Roche: '#B8A038',
  Sol: '#E0C068',
  Spectre: '#705898',
  Vol: '#A890F0',
  Dragon: '#7038F8',
  Eau: '#6890F0',
  Électrik: '#F8D030',
  Feu: '#FFB444',
  Glace: '#98D8D8',
  Plante: '#78C850',
  Psy: '#F85888',
  Ténèbres: '#705848',
} as const;

export type PokemonTypes = keyof typeof typeColors;

export const getTypeColor = (typeName: PokemonTypes) => {
  return typeColors[typeName] || '#A8A8A8';
};

export const getBackgroundType = (typeName: PokemonTypes) => {
  switch (typeName) {
    case 'Plante':
      return require('../assets/backgroundTypes/plante.png');
    case 'Feu':
      return require('../assets/backgroundTypes/feu.png');
    case 'Eau':
      return require('../assets/backgroundTypes/eau.png');
    case 'Acier':
      return require('../assets/backgroundTypes/plante.png');
    case 'Combat':
      return require('../assets/backgroundTypes/plante.png');
    case 'Insecte':
      return require('../assets/backgroundTypes/plante.png');
    case 'Normal':
      return require('../assets/backgroundTypes/plante.png');
    case 'Poison':
      return require('../assets/backgroundTypes/plante.png');
    case 'Roche':
      return require('../assets/backgroundTypes/plante.png');
    case 'Sol':
      return require('../assets/backgroundTypes/plante.png');
    case 'Spectre':
      return require('../assets/backgroundTypes/plante.png');
    case 'Vol':
      return require('../assets/backgroundTypes/plante.png');
    case 'Dragon':
      return require('../assets/backgroundTypes/plante.png');
    case 'Électrik':
      return require('../assets/backgroundTypes/plante.png');
    case 'Glace':
      return require('../assets/backgroundTypes/plante.png');
    case 'Psy':
      return require('../assets/backgroundTypes/plante.png');
    case 'Ténèbres':
      return require('../assets/backgroundTypes/plante.png');

    default:
      return require('../assets/backgroundTypes/eau.png');
  }
};
