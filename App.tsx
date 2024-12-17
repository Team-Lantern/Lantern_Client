import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import colors from './src/constants/colors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: colors.mainColor.background}}>
    </SafeAreaView>
  );
}

export default App;
