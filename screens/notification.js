import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Myappbar from '../components/componentsClient/myappbar';
import Mynavbar from '../components/componentsClient/navbar';
import Item2 from '../components/componentsClient/myitem2';
import NotificationBackground from '../assets/assets/svgricons/notificationBackground';

const Separator = () => <View style={styles.separator} />;

function clientaccount() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#324B3E' }}>
        <Myappbar
          title="Notifications"
          subtitle="Vous avez nouvelles notifications"
        />
        <NotificationBackground style={styles.image} />
        <View style={{ marginTop: '10%' }}>
          <Item2 title="bla" small="bla" smaller="bla" />

          <Item2 title="bla" small="bla" smaller="bla" />
        </View>
        <Separator />
      </ScrollView>
      <Mynavbar></Mynavbar>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: '40%',
    width: '20%',
    resizeMode: 'cover',
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: '25%',
    marginRight: '25%',
  },
});

export default clientaccount;
