import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import DayTimeSelector from "../Calender";
import ButtonNext from '../ButtonNext';
import { Context } from '../../contexts/TraderProfile.context';

const OpeningTime = ({toNextStep}) => {

 const {currentState,addInfos} = useContext(Context);
 const [calender, setCalender] = useState(currentState['calender']);
  
  const submit = ()=>{
    addInfos({calender});
    toNextStep();
    //navigation.navigate('ProductsCategory',{item: 'ffdfdf'});
  }
  return (
      <View style={styles.stepsContainer}>
  
        <DayTimeSelector 
          calender={calender}
          setCalender={setCalender}
        />

        <ButtonNext 
          style={styles.nextBtn}
          onPress={submit}
        />

      </View>
  );
};

export default OpeningTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 36,
    paddingBottom: 20,
    paddingTop: 10,
    flex: 1,
  },
  logoStyle: {
    alignSelf: "center",
    height: 200,
    width: 200,
  },
  stepsContainer: {
    paddingTop: '5%',
    justifyContent: "flex-end",
  },

  headerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 20,
    marginBottom: 12,
  },

  footerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 15,
  },

  nextBtn: {
    marginTop: "7%",
  },
});
