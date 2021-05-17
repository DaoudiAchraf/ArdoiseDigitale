import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  Text,
  Menu,
  Divider,
  Provider,
  Portal,
} from 'react-native-paper';
import Filter from '../../assets/svg-icones-client/filter.jsx';
import DropDown from '../DropDown';
import ModalDropdown from 'react-native-modal-dropdown';

const MenuFiltres = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const [selectedItem, setSelectedItem] = useState(0);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              icon={Filter}
              color="#426252"
              mode="contained"
              onPress={openMenu}
              uppercase="false"
            >
              Filtres
            </Button>
          }
        >
          <Text>Fitres</Text>
          <Text>Status marital</Text>

          <DropDown
            selectedItem={selectedItem}
            handleChange={setSelectedItem}
            items={['Marié(e)', 'Célibataire']}
          />
          <Menu.Item
            onPress={() => {
              console.log('on press makch 3ateha action shnia');
            }}
            title="Item 1"
          />
          <Menu.Item onPress={() => {}} title="Item 2" />

          <ModalDropdown options={['option 1', 'option 2']} />

          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MenuFiltres;
