import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IntroScreen from '../screens/Intro';
import mainScreens from './main-screens';
import PostDetailScreen from '../screens/posts/detail';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
        animation: 'none',
      }}>
        <Stack.Screen name="Intro" component={mainScreens.Intro} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;