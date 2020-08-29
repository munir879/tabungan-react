import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import TransaksiScreen from './screen/TransaksiScreen';
import ContuctUs from './screen/ContuctUs';
// import HomeScreen from './screen/HomeScreen';




const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function Transaksi() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="transaksi" component={TransaksiScreen} />

    </Stack.Navigator>
  );
}


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeScreen"
          activeColor="#c91caf"
          labelStyle={{ fontSize: 12 }}
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen name="Home" component={MyStack}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen name="Transaksi" component={Transaksi}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="shopping-cart" size={24} color={color} />
              ),
            }} />
          <Tab.Screen name="Laporan" component={ContuctUs}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="book" size={24} color={color} />
              ),
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}


