import React, { Component } from 'react';
import { View, ActivityIndicator, Dimensions, Share } from 'react-native';
import { Container, Fab, Content, Card, CardItem, Text, Icon, Button, Right, Left, Body } from 'native-base';
import { WebView } from 'react-native-webview';


import Head from '../screen/Head';



class Post extends Component {



    state = {
        data: '',
        isLoading: true,
        active: false,
        id: '',
    }
    componentDidMount = () => {
        this.state.id = this.props.route.params.id;
        fetch('https://srikandiindonesia.com/wp-json/wp/v2/posts/' + this.state.id, {
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

            });
    }

    onSharePress = (url) => {
        Share.share({
            title: 'Alert Title',
            message: url + '\nMessage goes here.'
        }).then((res) => console.log(res))
            .catch((error) => console.log(error))
    };


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
                </Container>
            )
        } else {


            return (
                <Container>
                    <Head />



                    <Content contentContainerStyle={{ flex: 1, }}>
                        <Card>
                            <CardItem header>
                                <Text>{this.state.data.title['rendered']}</Text>
                            </CardItem>
                            <CardItem style={{ height: (Math.round(Dimensions.get('window').height)) }}>
                                <WebView
                                    source={{ html: this.state.data.content['rendered'] }}
                                    injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.5, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
                                    scalesPageToFit={false}
                                    automaticallyAdjustContentInsets={false}
                                    onLoadEnd={this._onLoadEnd}
                                />
                            </CardItem>

                        </Card>

                    </Content>
                </Container>



            );
        }
    }
}

export default Post;