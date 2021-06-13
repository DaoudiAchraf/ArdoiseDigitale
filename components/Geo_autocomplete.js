import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from './Input'
import Geo from '../services/Geo';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Geo_Autocomplete = ({setAddress,error,setErrors}) => {

  const [value, setValue] = useState();

  const [suggestions,setSuggestions] = useState([]);

  const handleChange = (txt)=>{
  
    setValue(txt);
    txt.length >0 ?
    (Geo.getSuggestions(txt).then(res=>setSuggestions(res.data.items))):
    setSuggestions([]);

  }

  const pickSuggest = (item)=>{
   // console.log('place----------',item);
    //console.log(item);
    console.log(item.title);
    setValue(item.title);
    setAddress({
      location: item.address,
      position: item.position
    });
    setSuggestions([]);
  }

  return (
    <View >
      <Input
        label='Localisation'
        value={value}
        handleChange={handleChange}
        error={error}
        onFocus={()=>setErrors({address:false})}
      />

       <ScrollView  >
         <View style={styles.autocompleteContainer}>
          {suggestions.map((item,index)=>(
            <TouchableOpacity key={index} 
               style={styles.itemStyle}
              onPress={()=>pickSuggest(item)}
            >
              <Text key={index} style={styles.itemTxt}>{item.title}</Text>
            </TouchableOpacity>
           
         )
         )}
         </View>
      </ScrollView>

    </View>
   
  )
}

export default Geo_Autocomplete

const styles = StyleSheet.create({
  autocompleteContainer:{

    borderWidth: 0.5,
    borderTopWidth: 0,

  },
  itemStyle:{
     fontSize: RFPercentage(2)
  },
  itemTxt:{
     fontSize: RFPercentage(3)
  }

})
