import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Maximiser from '../../assets/assets/svgricons/maximiser';
import Minimiser from '../../assets/assets/svgricons/minimiser';

function PlusMinus(props) {
  const [isMinus, setIsMinus] = useState(false);

  return (
    <View style={{ margin: '10%' }}>
      {isMinus ? (
        <TouchableHighlight
          onPress={() => setIsMinus(false)}
          style={styles.imageContainer}
        >
          <Minimiser style={{ alignSelf: 'center' }} />
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          onPress={() => setIsMinus(true)}
          style={styles.imageContainer}
        >
          <Maximiser style={{ alignSelf: 'center' }} />
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 7,
    width: 7,
    borderRadius: 64,
    marginLeft: '6%',
    marginTop: '6%',
  },

  imageContainer: {
    justifyContent: 'center',
    height: 25,
    width: 25,
    borderRadius: 100 / 2,
    backgroundColor: 'black',
  },
});

export default PlusMinus;
/*<Image
style={styles.image}
source={require('../../assets/assets/icons/inscription-marchand-categorie-minimiser.png')}
/>*/
