import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingStack from './OnboardingStack';
import LoginStack from './LoginStack';


const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoginStack" component={LoginStack} />

      <Stack.Screen name="Onboarding" component={OnboardingStack} />
    </Stack.Navigator>
  );
};

export default RootStack;