import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import DropDown from "../DropDown";
import { RFPercentage } from 'react-native-responsive-fontsize';
import Input from "../Input";
import { color, Primary } from "../../constants/Colors";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import { h } from "../../utils/Size";
import { Formik } from 'formik';
import ProductAttributes from "./ProductAttributes";
import ButtonNext from '../ButtonNext';
import ImagePicker from '../ImagePicker';


const ProductForm = ({action,cancel,values}) => {

   let initialValues = {
    productName: '',
    price: '',
    unit: '',
    description: '',
    attributes: '',
    mesure: '',
    photo: ''
  }

  if(values)
    initialValues = values;

  const [attributes,setAttributes] = useState([]);

  const [photo,setPhoto] = useState(null);

  const onCancel = ()=>{
    cancel();
  }

  const onSubmit = (values) => {
    const product = {
      ...values,
      photo,
      attributes
    }

    action(product);
    cancel();
    
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row',justifyContent: 'center',}}>

                 <FontAwesome name="product-hunt" size={RFPercentage(6.3)} color= {Primary} />
                 <Text style={styles.headerTxt}>roduit</Text>            
        
             <MaterialCommunityIcons name="pencil-plus-outline"
               style={{marginLeft:8}}
               size={RFPercentage(6)} color={Primary}
            />
        </View>
       

        <Formik
     initialValues={ initialValues }
     onSubmit={values => onSubmit(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       
       
       <View style={{flex:1}} >

         <View style={{flex:1,marginBottom: '2%'}}>
          <Text style={styles.inputLabel} >Nom du Produit </Text>
          <Input
        
            mode="outlined"
            value={values.productName}
            handleChange={handleChange('productName')}
          />
          </View>
   
        <View style={styles.rowContainer}>
         
         <View style={{flex:1}}>
             <Text style={styles.inputLabel} >Prix </Text>
              <Input
              mode="outlined"
              value={values.price}
              handleChange={handleChange('price')}
            />
         </View>

         <View style={{flex:1,marginLeft:'1.5%',marginRight:'1.5%'}} >
             <Text style={styles.inputLabel} >Par </Text>
              <Input
              mode="outlined"
              value={values.unit}
              handleChange={handleChange('unit')}
            />
         </View>

          <View style={{flex:1.2,justifyContent:'flex-end'}}>
              <DropDown
                mode='boxed'
            
                items={['Kg','Litre','Inch']}
         
              />
          </View>
        </View>

        <View style={{flex: 1,marginBottom:h(2)}}>
          <Text style={styles.inputLabel} >Description </Text>
          <Input
            textArea
            mode="outlined"
            value={values.description}
            handleChange={handleChange('description')}
          />
        </View>

        <ImagePicker
            display
            image={photo}
            handleChange={setPhoto}    
            title="image de produit"
        />
       
        <Text style={styles.inputLabel} >Attributes</Text>
       <ProductAttributes
         attributes={attributes}
         setAttributes={setAttributes}
       />

        <View style={styles.btnContainer}>
          <ButtonNext style={styles.cancelBtnStyle} title="Annuler" onPress={onCancel} />
          <ButtonNext style={{flex:1}}  title="Valider" onPress={handleSubmit} />
        </View>
   

        </View>
     )}
   </Formik>
      </View>
    </ScrollView>
  );
};


export default ProductForm;

const styles = StyleSheet.create({
  nextBtn: {
    alignItems: "center",
    backgroundColor: "#324B3E",
    padding: 10,
    marginBottom: "5%",
    marginTop: "4%",
  },
  headerTxt: {
    textAlign: "center",
    color: color.INFO_TEXT,
    fontSize:RFPercentage(5),
    marginBottom: h(5),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: h(2)
  },
  inputLabel: {
    fontSize: RFPercentage(2.7),
    color: color.INFO_TEXT
  },

 btnContainer:{
    flexDirection:'row',
    marginTop: '5%',
    flex:1,

  },
  cancelBtnStyle:{
    flex:1,
    backgroundColor: color.CANCEL,
    marginRight: '5%',

  }
});