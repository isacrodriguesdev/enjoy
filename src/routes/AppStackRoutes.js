import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screen } from '~/app';
import AppTabRoutes from './AppTabRoutes';

import Profile from '~/pages/Profile/Index';
import Conversations from '~/pages/Conversations/Index';
import Notifications from '~/pages/Notifications/Index';

const AppStack = createStackNavigator();

const AppStackRoutes = () => (

   <AppStack.Navigator screenOptions={{
      header: () => null,
      animationEnabled: false,
      gestureEnabled: false,
   }} initialRouteName={screen.HOME}>
      <AppStack.Screen name="HOME" component={AppTabRoutes} />
      <AppStack.Screen name="CONVERSATIONS" component={Conversations} />
      <AppStack.Screen name="PROFILE" component={Profile} />
      <AppStack.Screen name="NOTIFICATIONS" component={Notifications} />
   </AppStack.Navigator>
);

export default AppStackRoutes;