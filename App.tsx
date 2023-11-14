import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from './pages/Loading';
import Select from './pages/Select';
import SelectedPokemon from './pages/SelectedPokemon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Select"
            component={Select}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectedPokemon"
            component={SelectedPokemon}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
