import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  List,
  Title,
  Caption,
  Surface,
  TouchableRipple,
} from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export default function ItemInCallout({ title, caption, img, navigation }) {
  return (
    <Surface style={{ padding: '1%', elevation: 4 }}>
      <List.Item
        title={title}
        description={caption}
        left={(props) => <List.Icon {...props} icon="folder" />}
        style={{
          backgroundColor: '#426252',
          width: '90%',
          alignSelf: 'center',
          marginBottom: '3%',
        }}
        titleStyle={{
          fontSize: RFValue(16),
          color: 'white',
          marginBottom: '1%',
          fontWeight: 'bold',
        }}
        descriptionStyle={{ fontSize: RFValue(12), color: 'white' }}
        onPress={() => navigation.navigate('ProfilMarchand')}
        rippleColor="rgba(0, 0, 0, .32)"
      />
    </Surface>
  );
}
/*
<Surface style={{ padding: '1%', elevation: 4 }}>
      <List.Item
        title={title}
        description={caption}
        left={(props) => <List.Icon {...props} icon="folder" />}
        style={{ backgroundColor: '#426252' }}
        titleStyle={{ fontSize: RFValue(16), color: 'white' }}
        descriptionStyle={{ fontSize: RFValue(12), color: 'white' }}
      />
    </Surface>


    <Card style={{ margin: '5%' }}>
      <Surface
        style={{ padding: '5%', elevation: 4, backgroundColor: '#426252' }}
      >
        <Card.Content>
          <View style={{ flexDirection: 'row' }}>
            <Avatar.Image
              size={32}
              source={require('../../assets/assets/user2.png')}
            />
            <View style={{ flexDirection: 'column', marginLeft: '2%' }}>
              <Title style={{ fontSize: RFValue(16), color: 'white' }}>
                {title}
              </Title>
              <Caption style={{ fontSize: RFValue(12), color: 'white' }}>
                {caption}
              </Caption>
            </View>
          </View>
        </Card.Content>
      </Surface>
    </Card>
    */
