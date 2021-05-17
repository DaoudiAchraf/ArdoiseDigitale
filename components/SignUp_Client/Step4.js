import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Input from '../Input';

const Step4 = ({ toNextStep }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [address, setAddress] = useState();

  const submit = () => {
    toNextStep();
  };

  return (
    <View style={styles.stepTwo_container}>
      <View>
        <Text style={{ marginBottom: 5 }}>Adresse de commerce *</Text>
        <Input value={address} handleChange={setAddress} />
        <TouchableOpacity onPress={submit} style={styles.nextBtn}>
          <Text style={{ color: 'white' }}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step4;

const styles = StyleSheet.create({
  step_container: {
    width: '100%',
  },
  nextBtn: {
    alignItems: 'center',
    backgroundColor: '#324B3E',
    padding: 10,
    marginBottom: '5%',
    marginTop: '4%',
  },
});
