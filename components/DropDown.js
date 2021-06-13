import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import PropTypes from "prop-types";
import { h } from "../utils/Size";

const DropDown = ({ items, selectedItem, handleChange, mode }) => {
  return (
    <View style={mode === 'boxed' ? styles.boxedContainer: styles.container}>
      <Picker
        style={mode === 'boxed' && {height: h(7)}}
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
        
      >
        {items.map((item, index) => {
          return <Picker.Item color="grey" 
                    itemStyle={{ color: "grey"}}
                    key={index}
                    label={item}
                    value={item}
                    
                 />;
        })}
      </Picker>
    </View>
  );
};

export default DropDown;


DropDown.propTypes = {
  mode : PropTypes.string,
};

DropDown.defaultProps = {
  mode: 'flat'
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: 'transparent',
  },

  boxedContainer: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    backgroundColor: 'transparent',

  }

});
