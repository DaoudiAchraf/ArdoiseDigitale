import React, { useState } from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import PropTypes from "prop-types";

export const Picker = ({ mode, show, setShow, handleChange }) => {
  const [value, setValue] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShow(Platform.OS === "ios");
    setValue(currentDate);

    let time;
    if (Math.trunc(currentDate.getMinutes() / 10) === 0)
      time = `${currentDate.getHours()}:` + `0${currentDate.getMinutes()}`;
    else time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    handleChange(time);
  };

  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={mode}
          is24Hour
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
  mode: "date",
  show: false,
};
