import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './navigation/navigation';
import { useFonts } from 'expo-font';

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    'ClashDisplay-Semibold': require('./assets/fonts/ClashDisplay-Semibold.otf'),
    'ClashDisplay-Regular': require('./assets/fonts/ClashDisplay-Regular.otf'),
    'Montserrat-Semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
