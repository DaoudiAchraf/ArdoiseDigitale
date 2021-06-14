import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import ImagePicker from '../ImagePicker';
import ButtonNext from '../ButtonNext';
import {w,h,totalSize} from '../../utils/Size';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import { InfoText } from '../../constants/Colors';
import {Context} from '../../contexts/TraderProfile.context';

const AboutTrader = ({toNextStep}) => {

  const { currentState,addInfos } = useContext(Context);

  const [traderPhoto,setTraderPhoto] = useState(currentState["traderPhoto"]);
  const [storePhoto,setStorePhoto] = useState(currentState["traderPhoto"]);

  const nextStep = ()=>{
    //console.log(traderPhoto);
    addInfos({traderPhoto,storePhoto});
    toNextStep();
    //navigation.navigate('OpeningTime');
  }

  return (
  
        <View style={styles.imgContainer}>
          <Text style={styles.text}>Photo du Commerce :</Text>
          <ImagePicker
              image={storePhoto}

              handleChange={setStorePhoto}
              onFocus={()=>setErrors({...errors,photo:false})}
          />

          <Text style={styles.text}>Votre Photo :</Text>
          <ImagePicker
              image={traderPhoto}
   
              handleChange={setTraderPhoto}
              onFocus={()=>setErrors({...errors,photo:false})}
          />
          <ButtonNext onPress={nextStep} />
        </View>
 

  );
};


export default AboutTrader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 36,
    paddingBottom: 20,
    paddingTop: 20,
  },
  logoStyle: {
    width: totalSize(30),
    height: totalSize(30),
    alignSelf: 'center',
    resizeMode: 'contain'
    
  },
  text:{
    fontSize: RFValue(16.5),
    paddingBottom: 0,
    color: InfoText,
    textAlign: 'justify'
  },
  imgContainer:{
    // flex:1,
    marginTop: h(2.5)
  }
});
