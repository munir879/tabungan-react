import React, { Component } from "react";
import { Image } from 'react-native';
// import { Body, Header, Title, Left, Thumbnail, View, Right } from "native-base";
import { Header } from 'react-native-elements';


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