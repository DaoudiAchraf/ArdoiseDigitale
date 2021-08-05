import React, { useContext, useEffect, useState } from "react";
import { View, Text,  Image,  StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";


import ClientService from '../services/Clientt';

import { Context } from '../contexts/Auth.context'

import Category from "../components/Category";


const MerchantCatalogueModification = ({navigation}) => {
//AaaaaAAAAAAAaaa
const [products, setProducts] = useState([])
  const { user } = useContext(Context);
  useEffect(() => {

    const getCatalog= async()=>{
     const response =
     await ClientService.getMerchantCatalogOwnerId(user._id);
     console.log("blalalalalal",response.data);
     if(response.ok)
      setProducts(response.data)
     else setAlert("Une erreur se produit , Veuillez vérifier votre connexion Internet .")
    }
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',user)
    console.log("lkjfjkfsqkdnjnjkfqdsnjkfqsj", products)
 
   getCatalog();

  },[]);
  
  


  return (
    <ScrollView
    style={{
      flex: 1,
      backgroundColor: "#324B3E",
    }}
  >
    <Myappbar
      title="Mon Catalogue"
      navigation={navigation}
    />
    <Image
      style={styles.image}
      source={require("../assets/assets/icons/fond-page-catalogue.png")}
    />
      
      <SafeAreaView style={{paddingHorizontal:'10%'}}>
      <Text style={styles.footerTxt}>
        {`Vous pouvez modifier votre cataloge à tout moment.\nIl est recommendé de le garder à jour pour garantir une meilleure expérience à vos clients`}
      </Text>
        {/* {products.map(item => <Text key={item._id}>{item.productName}</Text>)} */}
        {products.map((item) => (
          <Category key={item._id} item={item} categIndex={item.category} subCategIndex={item.subCategory} />
        ))}
      </SafeAreaView>

      

    </ScrollView>
  );
};

export default MerchantCatalogueModification;

const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-3%",
  },
  container: {
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 36,
    paddingTop: 10,
    flex: 1,
  },
  logoStyle: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
  },
  stepsContainer: {
    paddingTop: "5%",

    justifyContent: "flex-end",
  },
  headerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 20,
    marginBottom: 12,
  },
  footerTxt: {
    marginTop: "4%",
    marginBottom: "5%",
    textAlign: "justify",
    color: "#808080",
    fontSize: 15,
  },
  nextBtn: {
    alignItems: "center",
    backgroundColor: "#324B3E",
    padding: 10,
    marginBottom: "5%",
    marginTop: "4%",
  },
});
