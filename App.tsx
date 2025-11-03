import React, { useState } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Homepage from './src/Homepage'; 
import AddDishesPage from './src/AddDishesPage';
import FilteredMenuPage from './src/FilteredMenuPage'; 

type RootStackParamList = {
   Homepage: undefined
    App: undefined;
    AddDishesPage: { Dishname: string; DishDescription: string; DishPrice: number; };
} 

const Stack = createStackNavigator();

type AppScreenNavigationProp = StackNavigationProp<RootStackParamList, 'App'>; 


export default function App() {

  return (
     <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen name='Homepage' component={Homepage}/>
      <Stack.Screen name="AddDishesPage" component={AddDishesPage} />
      <Stack.Screen name="FilteredMenuPage" component={FilteredMenuPage} />
    </Stack.Navigator>
  </NavigationContainer> 
    ); 
} 



   