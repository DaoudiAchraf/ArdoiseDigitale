import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonNext from '../ButtonNext';
import { Context } from '../../contexts/TraderProfile.context';
import Category from '../Category';
import { GlobalProvider ,GlobalContext} from "../../contexts/ProductsCatalog.context";

const ProductsCategory = ({toNextStep}) => {

  //const selectedCategories = route.params.categories;
  
  const { currentState } = useContext(Context);
  const selectedCategories = currentState["categories"];
 // console.log(selectedCategories);

 
 const {products} = useContext(GlobalContext);
 const {addInfos,submitProfile} = useContext(Context);

 const submit = ()=>{
   console.log(products);
   addInfos({products});
   submitProfile();
   //toNextStep();
 }
  return (
      <View style={styles.stepsContainer}>
        {/* <Text style={styles.headerTxt}>Catalogues des produits</Text> */}

      <ScrollView>
      {selectedCategories.map((item,categIndex)=>
      (
        <Category 
         key={categIndex}
         item={item} 
         categIndex={categIndex}
        />
      )
      )}
      </ScrollView>
     
        <Text style={styles.footerTxt}>
          Sélectionner les Catégories de produits que votre commerce offre.
        </Text>

        <ButtonNext onPress={submit}/>
      </View>
      
  );
};

export default ProductsCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 36,
    paddingTop: 10,
    flex: 1,
  },
  logoStyle: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  stepsContainer: {
    paddingTop: '5%',
    
    justifyContent: 'flex-end',
  },
  headerTxt: {
    textAlign: 'center',
    color: '#324B3E',
    fontSize: 20,
    marginBottom: 12,
  },
  footerTxt: {
    marginTop: '4%',
    marginBottom: '5%',
    textAlign: 'justify',
    color: '#808080',
    fontSize: 15,
  },
  nextBtn: {
    alignItems: 'center',
    backgroundColor: '#324B3E',
    padding: 10,
    marginBottom: '5%',
    marginTop: '4%',
  },
});
