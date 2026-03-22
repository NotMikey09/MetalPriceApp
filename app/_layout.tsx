import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      
      <Stack.Screen 
        name="(tabs)/index" 
        options={{ title: 'Metal Prices' }} 
      />
      <Stack.Screen 
        name="(tabs)/details" 
        options={{ title: 'Price Details', headerBackTitle: 'Back' }} 
      />
    </Stack>
  );
}