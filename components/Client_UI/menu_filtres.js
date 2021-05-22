import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  Text,
  Menu,
  Divider,
  Provider,
  Portal,
  Title,
  Subheading,
  Headline,
  Caption,
} from 'react-native-paper';
import Filter from '../../assets/svg-icones-client/filter.jsx';
import DropDownFiltres from '../Client_UI/DropDownFiltres';
import ModalDropdown from 'react-native-modal-dropdown';

const MenuFiltres = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Provider>
      <View>
        <Menu
          style={{ marginTop: '5%', width: '95%', left: '1%' }}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              icon={Filter}
              color="#426252"
              mode="contained"
              onPress={openMenu}
              uppercase="false"
              style={{ width: '80%', left: '10%' }}
            >
              Filtres
            </Button>
          }
        >
          <View style={{ padding: '7%' }}>
            <Title style={{ marginBottom: '2%', color: '#426252' }}>
              Filtres
            </Title>
            <Caption>Ville</Caption>

            <View>
              <DropDownFiltres
                selectedItem={selectedItem}
                handleChange={setSelectedItem}
                items={['Tunis', 'Ariana', 'Marsa', 'Mannouba']}
              />
            </View>

            <Caption>Domaine d'activité</Caption>
            <DropDownFiltres
              selectedItem={selectedItem}
              handleChange={setSelectedItem}
              items={[
                'supermarché',
                'épicerie',
                'droguerie',
                'parfumerie',
                'boucherie',
                'boulangerie',
                'patisserie',
                'buraliste',
                'épicerie fine',
              ]}
            />
            <Caption>Mode de payement</Caption>
            <DropDownFiltres
              selectedItem={selectedItem}
              handleChange={setSelectedItem}
              items={[
                'à la commande',
                'à la livraison',
                'vendredi fin de semaine',
                'en 3 fois (chaque mois)',
              ]}
            />
            <Caption>Livraison</Caption>
            <DropDownFiltres
              selectedItem={selectedItem}
              handleChange={setSelectedItem}
              items={['à récupérer', 'à domicile']}
            />
          </View>
        </Menu>
      </View>
    </Provider>
  );
};

export default MenuFiltres;
