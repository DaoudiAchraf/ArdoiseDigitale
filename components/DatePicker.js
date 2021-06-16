import React, {useState} from 'react';
import {View, Button, Platform,Keyboard} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from './Input';
import moment from "moment";

 const App = ({date,setDate}) => {
  
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);

  };

  const showDatepicker = () => {
    Keyboard.dismiss;
    showMode('date');
  };



  return (
    <View>
      <View>

        <Input 
          value={date && moment(date).format('DD-MM-YYYY')}
          label="Date d'expiration de CIN"
          onFocus={showDatepicker}
          handleChange={showDatepicker}
          
        />
        {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date ? date :new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default App;