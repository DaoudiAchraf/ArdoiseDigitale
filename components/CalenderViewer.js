import React from "react";
import {
  StyleSheet,
  CheckBox,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DataTable, Title } from "react-native-paper";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Calender = ({ calender,setCalender}) => {

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
                {item.isOpen ?
              <CheckBox
                value={item.isOpen}   
              />
              : <CheckBox disabled />
            }
            </DataTable.Cell>
            <DataTable.Cell>
              {item.from != null ? (
                <Text style={styles.timeStyle}>{item.from}</Text>
              ) : (
                <TouchableOpacity
                  style={{ flexDirection: "row" }}

                >
                 <Text>X</Text>
                </TouchableOpacity>
              )}
            </DataTable.Cell>
            <DataTable.Cell numeric>
              {item.to != null ? (
                <Text style={styles.timeStyle}>{item.to}</Text>
              ) : (
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                >
                <Text>X</Text>
                </TouchableOpacity>
              )}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

    
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
