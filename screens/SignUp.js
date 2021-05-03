import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo,AntDesign } from '@expo/vector-icons'; 


const SignUp = ({ navigation }) => {
    return (
        <View style={styles.signIn_container}>
            
            <View style={styles.signIn__Box}>
                <Text style={styles.topTxt}>Créer un compte</Text>
                
                <TouchableOpacity 
                   style={{...styles.connectBtn,marginBottom:10}}
                   onPress={()=>navigation.navigate("SignUp_Trader")}     
                >
                    <Entypo name="shop" size={24} color="white" style={{marginRight:15}} />
                    <Text style={{color:"white",textAlign:"justify"}}>Je suis un marchant</Text>
                </TouchableOpacity>

                <TouchableOpacity
                   style={styles.connectBtn}
                        
                >
                    <AntDesign name="shoppingcart" size={27} color="white" style={{marginRight:15}}/>
                    <Text style={{color:"white",textAlign:"right"}}>Je suis un client</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.bottomTxt}>J'ai déja un compte</Text>
        </View>
    )
}



export default SignUp;

const styles = StyleSheet.create({
    signIn_container:{
        padding: 50,
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: '#426252'
    },
    signIn__Box:{
        padding: 12,
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
