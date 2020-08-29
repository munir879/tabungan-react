import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Container, Header, Label, Button, Input, Form, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import Head from './Head';
import register from './register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';


function HomeScreen({ navigation }) {
    return (
        <Container>
            <Head />
            <Content>
                <Card>
                    <CardItem style={{ justifyContent: 'center' }}>
                        <Text textAlign="center">Payment Mobile</Text>
                    </CardItem>

                    <CardItem style={{ justifyContent: 'center' }}>
                        <Text textAlign="center"></Text>
                    </CardItem>

                    <Button full rounded onPress={() => navigation.navigate('modal')}>
                        <Text>Scan Kartu</Text>
                    </Button>

                    <CardItem style={{ justifyContent: 'center' }}>
                        <Text>Nis : </Text>
                    </CardItem>

                    <CardItem style={{ justifyContent: 'center' }}>
                        <Text>Nama : </Text>
                    </CardItem>

                    <CardItem floatingLabel>
                        {/* <Label>Email</Label> */}
                        <Input autoCapitalize="none" placeholder="Nominal Rp." style={{ justifyContent: 'center', backgroundColor: '#f0f0f0' }} />
                    </CardItem>

                    <CardItem floatingLabel>
                        {/* <Label>Password</Label> */}
                        <Input autoCapitalize="none" placeholder="PIN" style={{ justifyContent: 'center', backgroundColor: '#f0f0f0' }} />
                    </CardItem>

                    <CardItem style={{ justifyContent: 'center' }}>
                        <Text textAlign="center"></Text>
                    </CardItem>

                    <Button full rounded success onPress={() => navigation.navigate('modal')}>
                        <Text>Bayar</Text>
                    </Button>

                </Card>
            </Content>
        </Container>
    );



}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('register')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('register')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="register">
                <Stack.Screen name="register" component={register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default HomeScreen;