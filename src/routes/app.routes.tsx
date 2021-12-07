/* eslint-disable no-unused-expressions */
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Welcome from '#/screens/Welcome';
import Climate from '#/screens/Climate';
import theme from '#/global/styles/theme';

const Stack = createStackNavigator();

export default function AppRoutes() {

  const optionsConfig = (title: string) => {
    return {
      title,
      headerStyle: {
        backgroundColor: theme.colors.grayLight,
        shadowColor: "transparent"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: theme.typography.medium,
      },
      headerLeftContainerStyle: {
        paddingLeft: 24,
      },
      headerRightContainerStyle: {
        paddingRight: 24,
      },
    };
  };

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Climate"
        component={Climate}
        options={optionsConfig('ClimaJá')}
      />
    </Stack.Navigator>
  );
}
