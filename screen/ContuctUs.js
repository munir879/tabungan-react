import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import Head from '../screen/Head';

export default class ContuctUs extends Component {
    render() {
        return (
            <Container>
                <Head />
                <Content>
                    <Card>
                        <CardItem header bordered>
                            <Text>Social Media</Text>
                        </CardItem>
                        <CardItem button onPress={() => { Linking.openURL('https://www.instagram.com/pb_srikandi_indonesia/') }}>
                            <Icon active name="logo-instagram" />
                            <Text>Instagram</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem button onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCEe8M2jjI4jNPL2gRsZ7k-Q') }}>
                            <Icon active name="logo-youtube" />
                            <Text>Youtube</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem button onPress={() => { Linking.openURL('https://twitter.com/srikandinavian') }}>
                            <Icon active name="logo-twitter" />
                            <Text>Twitter</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem button onPress={() => { Linking.openURL('https://timeline.line.me/user/_dfWwCHyBu-5DiWrpGA94bL5TWVR-i92js5-6nzk') }}>
                            <Icon active name="square" />
                            <Text>Line</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem button onPress={() => { Linking.openURL('https://www.facebook.com/srikandiugm/') }}>
                            <Icon active name="logo-facebook" />
                            <Text>Facebook</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}