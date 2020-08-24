import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Title, Right, Left, Thumbnail } from 'native-base';
import { DarkTheme } from '@react-navigation/native';
import Post from '../screen/Post';
import Head from '../screen/Head';
import { ScrollView } from 'react-native-gesture-handler';


class HomeScreen extends Component {

    state = {
        data: null,
        isLoading: true
    }

    data() {
        fetch('https://srikandiindonesia.com/wp-json/wp/v2/posts?_embed', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount = () => {

        const { navigation } = this.props;

        this.focusListener = navigation.addListener('focus', () => {
            this.data()
        });
    }

    componentWillUnmount() {
        this.setState({
            data: null,
        })
    }


    render() {

        if (this.state.isLoading) {
            return (

                <Container>
                    <Header style={{ backgroundColor: '#c91caf' }}>

                        <Body style={{ alignItems: 'center' }}>
                            <Title style={{ fontSize: 20 }}>Srikandi Indonesia</Title>
                        </Body>

                    </Header>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <ActivityIndicator />
                    </View>
                </Container>
            )
        } else {
            let post = this.state.data.map((data) => {
                let image = data.jetpack_featured_media_url ?
                    <Thumbnail resizeMode="contain" square large source={{ uri: data.jetpack_featured_media_url }} />
                    : null;
                return <Card key={data.id}  >
                    <CardItem button onPress={() => this.props.navigation.navigate("Post", { id: data.id })}>
                        <Left>
                            <Text active="true" >{data.title['rendered']}</Text>
                        </Left>
                        <Right style={{ alignContent: 'flex-end' }}>

                            {image}

                        </Right>
                    </CardItem>
                </Card >

            })

            return (

                <Container>
                    <Head />

                    <ScrollView>
                        {post}
                    </ScrollView>
                </Container>

            );
        }
    }
}

export default HomeScreen;