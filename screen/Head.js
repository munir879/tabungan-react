// import React, { Component } from "react";
// import { StyleSheet, View, Text, Button } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// export default function Head({ navigation }) {

//     const openMenu = () => {
//         navigation.openDrawer();
//     }

//     return (
//         <View style={styles.Head}>
//             <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
//             <View>
//                 <text style={styles.headText}>GameZone</text>
//             </View >
//         </View >
//     );
// }

// const styles = StyleSheet.create({
//     Header: {
//         width: '100%',
//         height: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',

//     },
//     headerText: {
//         fontWeight: 'bold',
//         fontSize: '20',
//         color: '#333',
//         letterSpacing: 1,
//     },

// });

import React, { Component } from "react";
import { Image, View, Text, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default class Head extends Component {
    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'WASERDA', style: { color: '#fff' } }}
                rightComponent={{ icon: 'share', color: '#fff' }}
            />
        );
    }
}