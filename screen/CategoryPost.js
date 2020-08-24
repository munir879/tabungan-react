import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Right, Thumbnail } from 'native-base';
import { DarkTheme } from '@react-navigation/native';
import Post from '../screen/Post';
import Head from '../screen/Head';


class CategoryPost extends Component {

    state = {
        data: null,
        isLoading: true,
        id: null
    }

    data() {
        this.state.id = this.props.route.params.id;
        console.log(this.state.id);
        fetch('https://srikandiindonesia.com/wp-json/wp/v2/posts?categories=' + this.state.id, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
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
                    <Head />
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <ActivityIndicator />
                    </View>
                </Container >
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
                    <Content>{post}</Content>
                </Container>
            );
        }
    }
}

export default CategoryPost;