import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#312e38' },
      headerShown: false,
    }}
  >
    <App.Screen component={Dashboard} name="Dashboard" />
  </App.Navigator>
);

export default AppRoutes;
