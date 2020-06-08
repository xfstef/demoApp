import React, { useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from '../styles/loginStyles';

const Login = props => {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [loginActive, setLoginActive] = useState(false);

    useEffect(() => {
        if (email && email != '' && pass && pass !='')
            setLoginActive(true);
        else
            setLoginActive(false);
      }, [email, pass]);

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Demo App</Text>
            <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Email..." 
                placeholderTextColor="black"
                onChangeText={(text) => {
                    setEmail(text);
                }}/>
            </View>
            <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                secureTextEntry
                placeholder="Password..." 
                placeholderTextColor="black"
                onChangeText={(pass) => {
                    setPass(pass);
                }}/>
            </View>
            <TouchableOpacity>
            <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.loginBtn, {backgroundColor: loginActive? "black" : "darkgrey"}]}
                disabled={!loginActive}
                onPress={() => {props.navigation.navigate('Calendar');}}>
                <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.text}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

Login.navigationOptions = {
    headerTitle: 'Login'
};

export default Login;
