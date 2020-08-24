import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAzOWSUsxHWQSak_hglMkejB_yeaGzNSj4",
    authDomain: "projectmangement-48c71.firebaseapp.com",
    databaseURL: "https://projectmangement-48c71.firebaseio.com",
    projectId: "projectmangement-48c71",
    storageBucket: "projectmangement-48c71.appspot.com",
    messagingSenderId: "817540046588",
    appId: "1:817540046588:web:d95f814916849a1d"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input autoCapitalize="none" autoCorrect={false} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </Item>
                    <Button full rounded>
                        <Text>SignIn</Text>

                    </Button>
                    <Button full rounded success style={{ marginTop: 20 }}> <Text>Signup</Text>
                    </Button>
                </Form>
            </Container>
        );
    }

    SignUp = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error.toString(error));
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        justifyContent: "center"
    }
});