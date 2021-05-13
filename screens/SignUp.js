import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo,AntDesign } from '@expo/vector-icons'; 


const SignUp = ({ navigation }) => {
    return (
        <View style={styles.signUp_container}>
            <View style={{flex:1}}>
                <Image
                resizeMode="contain"
                style={{width:"100%",height:"70%"}} 
                source={require('../assets/images/logo-light.png')}/>
            </View>
            
            <View style={styles.signUp__Box}>
                <Text style={styles.topTxt}>Créer un compte</Text>
                
                <TouchableOpacity 
                   style={{...styles.connectBtn,marginBottom:10}}
                   onPress={()=>navigation.navigate("SignUp_Trader")}     
                >
                    <Entypo name="shop" size={24} color="white" style={{marginRight:15}} />
                    <Text style={{color:"white",textAlign:"justify"}}>Je suis un marchand</Text>
                </TouchableOpacity>

                <TouchableOpacity
                   style={styles.connectBtn}
                   onPress={()=>navigation.navigate("SignUp_Client")}
                >
                    <AntDesign name="shoppingcart" size={27} color="white" style={{marginRight:15}}/>
                    <Text style={{color:"white",textAlign:"right"}}>Je suis un client</Text>
                </TouchableOpacity>
            </View>

            <Text
              style={styles.bottomTxt}
              onPress={()=>navigation.navigate("SignUp")} 
            >
                J'ai déja un compte
            </Text>
        </View>
    )
}



export default SignUp;

const styles = StyleSheet.create({
    signUp_container:{
        padding: 50,
        flex:1,
        justifyContent: 'flex-end',
        backgroundColor: '#426252'
    },
    signUp__Box:{
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 20
    },
    connectBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#324B3E',
        padding: 10,
    },
    topTxt:{
        textAlign: 'center',
        color: '#324B3E',
        fontSize: 20,
        marginBottom: 12
    },
    bottomTxt:{
        textAlign: 'center',
        color: "white",
        fontSize: 15
    }
})
