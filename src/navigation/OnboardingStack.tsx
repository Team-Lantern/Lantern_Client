import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingIntro from '../screens/onboarding/OnboardingIntro';
import WomenVerification from '../screens/onboarding/WomenVerification';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WomenVerification"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingIntro" component={OnboardingIntro} />
      <Stack.Screen name="WomenVerification" component={WomenVerification} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;