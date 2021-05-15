import React, { useState } from "react";
import {
  StyleSheet,
  CheckBox,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DataTable, Title } from "react-native-paper";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import PropTypes from "prop-types";
import { days } from "../constants/Arrays";
import DateTimePicker from "./DateTimePicker";

const Calender = ({ items, selectedItem, handleChange }) => {
  const [calender, setCalender] = useState(days);

  const [showPicker, setShowPicker] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(null);

  const onChange = (index) => {
    const item = calender[index];
    const newCalender = [...calender];
    newCalender[index] = {
      ...item,
      isOpen: !item.isOpen,
    };
    setCalender(newCalender);
  };

  const setTime = (time) => {
    const { day, isFrom } = currentIndex;
    const item = calender[day];
    const newCalender = [...calender];

    if (isFrom)
      newCalender[day] = {
        ...item,
        from: time,
      };
    else
      newCalender[day] = {
        ...item,
        to: time,
      };
    setCalender(newCalender);

    console.log(newCalender[day]);
  };

  const onTimeChange = (index, time) => {
    setCurrentIndex({ day: index, isFrom: time });
    setShowPicker(!showPicker);
  };

  return (
    <ScrollView style={{ marginTop: 10 }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title />
          <DataTable.Title style={{ flex: 1.3 }} />
          <DataTable.Title>
            <Title>De</Title>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Title>À</Title>
          </DataTable.Title>
        </DataTable.Header>

        {calender.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell style={styles.cell}>
              <Text style={styles.txt}>{item.name}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <CheckBox
                value={item.isOpen}
                onValueChange={() => onChange(index)}
              />
            </DataTable.Cell>
            <DataTable.Cell>
              {item.from != null ? (
                <Text style={styles.timeStyle}>{item.from}</Text>
              ) : (
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => onTimeChange(index, true)}
                >
                  <MaterialCommunityIcons
                    name="clock-start"
                    size={25}
                    color="black"
                  />
                  <Entypo name="chevron-down" size={18} color="black" />
                </TouchableOpacity>
              )}
            </DataTable.Cell>
            <DataTable.Cell numeric>
              {item.to != null ? (
                <Text style={styles.timeStyle}>{item.to}</Text>
              ) : (
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => onTimeChange(index, false)}
                >
                  <MaterialCommunityIcons
                    name="clock-start"
                    size={25}
                    color="black"
                  />
                  <Entypo name="chevron-down" size={18} color="black" />
                </TouchableOpacity>
              )}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <DateTimePicker
        show={showPicker}
        setShow={setShowPicker}
        mode="time"
        handleChange={setTime}
      />
    </ScrollView>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    marginTop: 5,
  },
  cell: {
    flex: 1.3,
  },
  timeStyle: {
    color: "#008577",
    fontSize: 16,
  },
  txt: {
    fontSize: 16,
  },
});
