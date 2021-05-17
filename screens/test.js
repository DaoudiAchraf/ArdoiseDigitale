import React, { useState } from 'react';

import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import MarkerSvg from '../assets/svg-icones-client/marker.jsx';
import Filter from '../assets/svg-icones-client/filter.jsx';
import BackSvg from '../assets/svg-icones-client/back.jsx';

import { Button, TextInput, Portal } from 'react-native-paper';
import MenuFiltres from '../components/Client_UI/menu_filtres';

export default function test() {
  const [markers, setMarkers] = useState([
    {
      title: 'marchand 1',
      latlng: { latitude: 36.9, longitude: 10.238 },
      description: 'I am a very good shop',
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 36.87014037882809,
            longitude: 10.237451295943895,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            >
              <MarkerSvg />
            </Marker>
          ))}
          <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </MapView>

        <View style={styles.container3}>
          <MenuFiltres />
        </View>

        <View style={styles.container2}>
          <View style={{ width: '10%' }}>
            <Button
              compact="true"
              icon={BackSvg}
              color="#426252"
              mode="contained"
              onPress={() => console.log('Pressed')}
            ></Button>
          </View>

          <View style={{ width: '50%' }}>
            <TextInput
              mode="flat"
              dense="true"
              placeholder={'Recherche..'}
              selectionColor="#426252"
              underlineColor="#426252"
              onChangeText={(text) => console.log(text)}
              style={{ height: '100%' }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    top: '5%',
    left: '7%',
    position: 'absolute',
    justifyContent: 'space-between',
    width: '90%',
    height: '4.5%',
  },
  container3: {
    width: '30%',
    top: '100%',
    backgroundColor: 'black',
    position: 'relative',
  },
});
