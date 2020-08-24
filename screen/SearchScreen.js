import React, { Component } from "react";
import { ActivityIndicator, View } from 'react-native';
import { Container, Header, Content, Input, Title, Card, CardItem, Body, Text } from "native-base";
import { FontAwesome } from '@expo/vector-icons';




class SearchScreen extends Component {

    constructor(props) {
        super(props);
        //setting default state
        this.state = {
            data: '',
            isLoading: false,
            key: ''
        };
    }

    get renderMovies() {
        let movies = null;
        if (this.state.data) {
            movies = this.state.data.map((data) => {
                let image = data.jetpack_featured_media_url ? <CardItem button >
                    <Image source={{ uri: data.jetpack_featured_media_url }} style={{ height: 130, width: null, flex: 1, resizeMode: 'stretch' }} />
                </CardItem> : null;
                return <Card style={{ borderRadius: 10, }}>
                    {image}
                    <CardItem button onPress={() => this.props.navigation.navigate("Post", { id: data.id })}>
                        <Body>
                            <Text>{data.title['rendered']}</Text>
                        </Body>
                    </CardItem>

                </Card >

            })
        }

        return movies;
    }

    get Loading() {
        let movies = this.state.isLoading ? <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 10
        }}>
            <ActivityIndicator />
        </View> : null;

        return movies;
    }




    Search = () => {
        this.setState({
            isLoading: true,
            data: ''
        })
        fetch('https://srikandiindonesia.com/wp-json/wp/v2/posts?_embed&search=' + this.state.key, {
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

    searchFilterFunction = text => {
        this.setState({ key: text });
    };


    render() {


        return (
            <Container>
                <Header style={{ backgroundColor: '#c91caf' }}>

                    <Body style={{ alignItems: 'center' }}>
                        <Title style={{ fontSize: 20 }}>Srikandi Indonesia</Title>
                    </Body>

                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Input
                                placeholder="Masukan Kata Kunci"
                                onChangeText={text => this.searchFilterFunction(text)}
                            />
                            <FontAwesome
                                name="search"
                                size={30}
                                onPress={this.Search}
                                style={{
                                    marginLeft: '5px'
                                }}
                            />
                        </CardItem>
                    </Card>
                    {this.Loading}
                    {this.renderMovies}
                </Content>
            </Container>
        );
    }
}

export default SearchScreen;