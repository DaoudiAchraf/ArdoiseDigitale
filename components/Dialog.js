import * as React from 'react';
import { View } from 'react-native';
import { Dialog, Portal } from 'react-native-paper';
import { h } from '../utils/Size';

const MyComponent = ({visible, setVisible,children}) => {

  //const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={{height: h(75)}}>
          <Dialog.Title>Catégories</Dialog.Title>
              <View style={{height: h(65),paddingLeft:'3%',paddingRight:'3%'}}>

              {children}
              </View>

        </Dialog>
      </Portal>
  );
};

export default MyComponent;