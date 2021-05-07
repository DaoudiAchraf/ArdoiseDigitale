import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';


export const Picker = ({mode,show,setShow}) => {

  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

 
  return (
    <View>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Picker;

Picker.propTypes = {
    show: PropTypes.bool,
    mode: PropTypes.string,
  };
  
Picker.defaultProps = {
    mode : 'date',
    show : false
  };
  