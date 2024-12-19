import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from './src/constants/colors';
import OnboardingStack from './src/navigation/OnboardingStack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="OnboardingStack"
          component={OnboardingStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
