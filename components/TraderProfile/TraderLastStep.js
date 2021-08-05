import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextStep from '../TextStep';
import { txt } from '../../constants/Strings';
import ButtonNext from '../ButtonNext';
import { Context } from "../../contexts/TraderProfile.context";

export default function TraderFirstConnection({toNextStep}) {
    const { submitProfile } = useContext(Context);


    return (
        <View>
             <TextStep >
                {txt.ACCOUNT_FINISHED}
            </TextStep>
            <ButtonNext onPress={submitProfile} title="Terminer" />
        </View>
       
    )
}


