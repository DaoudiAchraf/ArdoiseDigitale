import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function StepsFooter() {
    return (
        <>
              <TouchableOpacity
                style={styles.nextBtn}
                onPress={()=>ToNextStep(currentStep+1)}
                >
                    <Text style={{color:"white"}}>Suivant</Text>
                </TouchableOpacity>

                <Text style={styles.Txt}>J'ai déja un compte</Text>

                
        </>
    )
}

const styles = StyleSheet.create({})
