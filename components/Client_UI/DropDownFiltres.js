import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropDownFiltres = ({ items, selectedItem, handleChange }) => {
  return (
    <View style={styles.container}>
      <Picker
        style={{ height: 38 }}
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
      >
        {items.map((item, index) => {
          return <Picker.Item key={index} label={item} value={index} />;
        })}
      </Picker>
    </View>
  );
};

export default DropDownFiltres;

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    marginBottom: 5,
    backgroundColor: '#F6F6F6',
  },
});
