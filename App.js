import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import NavigationTheme from './src/Navigation/NavigationTheme';

function App(props) {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
