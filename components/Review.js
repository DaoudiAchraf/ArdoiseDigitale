import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    Dialog,
    Paragraph,
    Portal,
    Provider,
    TextInput,
  } from "react-native-paper";
  import GreenBtn from "./componentsClient/GreenBtn";
  import RedBtn from "./componentsClient/RedBtn";
  import { Rating, } from 'react-native-ratings';
import { totalSize } from '../utils/Size';
import { color } from '../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import CommonServices from '../services/Common';


const Review = ({visible, setVisible, user, onFinishRating}) => {

    const [review,setReview] = useState('');
    const [rate,setRate] = useState(null);
    
    const onSubmitReview = ()=>{
    // console.log('revv',review);
    // console.log('rate',rate);
        CommonServices.postReview({
            review,
            rate,
            user
        });
        setVisible(false);
    }

    return (
        <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>


        <Rating 
             startingValue={0}
             style={{marginTop:'8%'}}
             onFinishRating={(value)=>setRate(value)}
             ratingCount={5} imageSize={totalSize(5)}
            />
          <Dialog.Title style={{ fontWeight: "600", color: "#426252" }}>
            Laissez votre avis :
          </Dialog.Title>
          <Dialog.Content>
              <Text style={{color:color.INFO_TEXT,fontSize:RFValue(15)}}>
              Votre avis sur ce marchand ne sera visible qu'aux autres
              clients dans notre réseau.
              </Text>

              <Text style={{color:color.INFO_TEXT,fontSize:RFValue(13),marginTop:'2%',marginBottom:'3%'}} >
              Saisissez votre avis puis appuyez sur "envoyer" afin de le
              soumettre.
              </Text>


            <TextInput
              multiline
              numberOfLines={5}
              label="Mon avis"
              value={review}
              onChangeText={(txt) =>
                setReview(txt)
              }
            />

            <View style={{ flexDirection: "row" }}>
              <RedBtn myRedBtn action={()=>setVisible(false)} title="Annuler" />
              <GreenBtn
                myGreenBtn
                action={onSubmitReview}
                title="Envoyer"
              />
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    )
}

export default Review

const styles = StyleSheet.create({})
