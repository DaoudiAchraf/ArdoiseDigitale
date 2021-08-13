import React, { useEffect, useState, useContext } from "react";

import MapView, { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { h, w } from "../../utils/Size";
import { color } from "../../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo } from '@expo/vector-icons'; 

export default function MapScreen({ navigation }) {
  
  const [marker,setMarker] = useState({
    latitude: 36.87014037882809,
    longitude: 10.237451295943895,});

    const handleRegionChange = mapData => {
        setMarker({latitude: mapData.latitude, longitude: mapData.longitude});
      };
  return (
    <View style={styles.container}>
      <MapView
        
        style={styles.map}
        initialRegion={{
          latitude: 36.87014037882809,
          longitude: 10.237451295943895,
          latitudeDelta: 7,
          longitudeDelta: 7,
        }}
        onRegionChange={handleRegionChange}
      >
        <Marker draggable
            pinColor={color.Primary}
            coordinate={marker}
            onDrag={(e) => {
                console.log(e.nativeEvent.coordinate);
            }}
        />

      </MapView>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.goBack()}>
          <Entypo name="location" size={RFValue(17.3)} color={color.WHITE} />
          <Text style={{color: color.WHITE,fontSize :RFValue(14.5),marginLeft:5}} >Confirmer votre position</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '8%',
    borderWidth: 1,
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  btn: {
    position:'absolute',
    bottom:0,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: color.lightPrimary,
    padding: 8,
    marginBottom : '5%',
    borderRadius: 25,
    alignItems: 'center'
  }

});
