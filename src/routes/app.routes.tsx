/* eslint-disable no-unused-expressions */
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Welcome from '#/screens/Welcome';

const Stack = createStackNavigator();

export default function AppRoutes() {

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
