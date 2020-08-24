import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Container, Header, Label, Button, Input, Form, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import Head from '../screen/Head';

export default class register extends Component {
    render() {
        return (
            <Container>
                <Head />
                <Content>
                    <Card>
                        <CardItem header bordered>
                            <Text></Text>
                        </CardItem>

                        <CardItem floatingLabel>
                            {/* <Label>Email</Label> */}
                            <Input autoCapitalize="none" placeholder="Email" autoCorrect={false} />
                        </CardItem>

                        <CardItem floatingLabel>
                            {/* <Label>Password</Label> */}
                            <Input autoCapitalize="none" placeholder="Password" textAlign="center" autoCorrect={false} style={{ alignItems: 'center' }} />
                        </CardItem>

                        <Button full rounded success>
                            <Text>Login</Text>
                        </Button>
                        <Label>.</Label>
                        <Button full rounded>
                            <Text>Register</Text>
                        </Button>
                        <CardItem header bordered>
                            <Text>Lupa Password?</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
