import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const DropDown = ({items,selectedItem,handleChange}) => {

    return (
        
        <View style={styles.container}>
            <Picker 
                style={{height:38}}
                selectedValue={selectedItem}
                onValueChange={(itemValue, itemIndex) =>
                handleChange(itemValue)
            }>
                {
                    items.map((item,index) => {
                      return (
                        <Picker.Item 
                           key={index} 
                           label={'    '+item}
                           value={index}
                        />
                      )
                    })
                }
              
            </Picker>
        </View>
    )
}

export default DropDown

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.3,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#E7E7E7'
    },

})

