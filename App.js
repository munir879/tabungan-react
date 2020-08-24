import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';



// import HomeScreen from './screen/HomeScreen';
import login from './screen/login';
import register from './screen/register';
import CategoryScreen from './screen/CategoryScreen';
import ContuctUs from './screen/ContuctUs';
import Post from './screen/Post';
import CategoryPost from './screen/CategoryPost';




const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={login} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}

function category() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="category" component={CategoryScreen} />
      <Stack.Screen name="CategoryPost" component={CategoryPost} />
    </Stack.Navigator>
  );
}


export default class App extends Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHideAsync();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{
          flex: 1,
          backgroundColor: "#000000",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            source={require('./assets/splash.gif')}
            onLoad={this._cacheResourcesAsync}
            style={{ "resizeMode": "contain" }}
          />
        </View>
      );
    }

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
          <Tab.Screen name="Transaksi" component={category}
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

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/splash.gif');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hideAsync();
    const images = [
      require('./assets/splash.png'),
      require('./assets/splash.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    setTimeout(() => { this.setState({ isReady: true }) }, 2100);
    ;
  };
}


