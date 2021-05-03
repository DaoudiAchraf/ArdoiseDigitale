import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'

const SignIn = ({ navigation }) => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const submit = ()=>{
        console.log('->',username,password);

    }

    return (
        <View style={styles.signIn_container}>
            <View style={{flex:1}}>
                <Image
                resizeMode="contain"
                style={{width:"100%",height:"80%"}} 
                source={require('../assets/logo-light.png')}/>
            </View>
          
            
            <View style={styles.signIn__Box}>
                <Input 
                   value={username}
                   handleChange={setUsername}
                   placeholder="Nom d'utilisateur"
                />

                <Input
                  value={password}
                  handleChange={setPassword}
                  placeholder="*******" 
                  secureTextEntry
                />

                <TouchableOpacity 
                    style={styles.connectBtn}
                    onPress={submit}
                >
                    <Text style={styles.btnTxt}>Se conneter</Text>
                </TouchableOpacity>
            </View>

            <Text 
              style={styles.account_Txt}
              onPress={()=>navigation.navigate("SignUp")}  
            >
                Créer un compte
            </Text>
        </View>
    )
}



export default SignIn;
const styles = StyleSheet.create({

    signIn_container:{
        padding: 50,
        paddingTop:30,
        justifyContent: 'flex-end',
        backgroundColor: '#426252',
        flex: 1
    },
    signIn__Box:{
        padding: 12,
        backgroundColor: 'white',
        marginBottom: 20,
 
    },
    connectBtn: {
        alignItems: 'center',
        backgroundColor: '#324B3E',
        padding: 10,
    },
    btnTxt:{
        color: 'white',
        fontSize: 17
    },
    account_Txt:{
        textAlign: 'center',
        color: "white",
        fontSize: 16
    }
})
