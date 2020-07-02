import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#312e38" barStyle="light-content" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
