import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextStep from '../TextStep';
import { txt } from '../../constants/Strings';
import ButtonNext from '../ButtonNext';

export default function TraderFirstConnection({toNextStep}) {
    

    return (
        <View>
             <TextStep >
                {txt.ACCOUNT_CREATED}
            </TextStep>
            <ButtonNext onPress={toNextStep} title="commencer" />
        </View>
       
    )
}




