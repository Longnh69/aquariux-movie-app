import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../features/home/HomePage';
import { RootStackParamList } from '../types/NavigationTypes';
import DetailScreen from '../features/detail/MovieDetailPage';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const BottonTab: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

    </Tab.Navigator>
  );
};

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={BottonTab}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Detail" component={DetailScreen}
        options={{ headerShown: false }}
       />
    </Stack.Navigator>
  );
}
