import React, { useState } from 'react';
import { StyleSheet, View, CheckBox, Text, ScrollView } from 'react-native';
import { DataTable, Title } from 'react-native-paper';
import DateTimePicker from './DateTimePicker';
import PropTypes from 'prop-types';

const DropDown = ({items,selectedItem,handleChange}) => {

    console.log('ttt');
    const [Monday,setMonday] = useState({
        isOpen: false,
        from: '12:0',
        to:null
    });

    const onChange = ()=>{
        setMonday({
            isOpen: !Monday.isOpen,
            from: '1',
            to:'4',
        })
        console.log('jj');
    }

    const [showPicker,setShowPicker] = useState(false);

    const [Mon,onChan] = useState(false);

    return (
        

<ScrollView style={{marginTop:10}}>
<CheckBox value={Mon} onValueChange={onChan}/>
<DataTable>
    <DataTable.Header>
      <DataTable.Title ></DataTable.Title>
      <DataTable.Title style={{flex:1.3}}></DataTable.Title>
      <DataTable.Title ><Title>De</Title></DataTable.Title>
      <DataTable.Title numeric><Title>À</Title></DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell style={styles.cell}>
        <Text style={styles.txt}>Lundi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox value={Monday.isOpen} onValueChange={onChange}/>
      </DataTable.Cell  >
      <DataTable.Cell onPress={()=>setShowPicker(!showPicker)}  >
          {Monday.from}
      </DataTable.Cell  >
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell style={{borderWidth:1,flex:1.3}}>
        <Text style={styles.txt}>Mardi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell style={{borderWidth:1,flex:1.3}}>
        <Text style={styles.txt}>Mercredi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell style={{flex:1.3}}>
        <Text style={styles.txt}>Mercredi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={{borderWidth:1,flex:1.3}}>
        <Text style={styles.txt}>Mercredi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={{borderWidth:1,flex:1.3}}>
        <Text style={styles.txt}>Mercredi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell style={{borderWidth:1,flex:1.3}}>
        <Text style={styles.txt}>Mercredi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell style={{borderWidth:1,flex:1.3}}>
        <Text style={styles.txt}>Mercredi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>
         <DataTable.Row>
      <DataTable.Cell style={{borderWidth:1,flex:1.3}}>
        <Text style={styles.txt}>Mercredi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell style={{borderWidth:1,flex:1.3}}>
        <Text style={styles.txt}>Mercredi</Text>
      </DataTable.Cell>
      <DataTable.Cell>
          <CheckBox/>
      </DataTable.Cell  >
      <DataTable.Cell >
          88:88
      </DataTable.Cell  >
      <DataTable.Cell numeric>88:88</DataTable.Cell>
    </DataTable.Row>
  </DataTable>

<DateTimePicker show={showPicker} setShow={setShowPicker} mode={'time'}/>
  </ScrollView>
           

    
    )
}

export default DropDown

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        marginTop: 5,
    },

    cell: {
        flex: 1.3 
    },

    txt:{
        fontSize:16
    }

})

