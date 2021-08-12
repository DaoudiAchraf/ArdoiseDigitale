import React, { useState,useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { h, totalSize, w } from '../utils/Size';
import { Primary, Secondary ,Catalog_SubIcon ,color } from '../constants/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import Popup from './Popup';
import ProductForm from './ProductForm/ProductForm';
import { GlobalContext } from '../contexts/ProductsCatalog.context';
import { URL } from '../services/Client';

export default function ProductCard({product, modif}) {

  const [popupVisible,setPopupVisible] = useState(false);

  const {editproduct,removeproduct,  modifiedProds, setModifiedProds, deletedProds, setDeletedProds} = useContext(GlobalContext);

  const editProduct = (productToEdit)=>{
    
      editproduct(productToEdit);

      if (modif) {
        setModifiedProds([...modifiedProds, productToEdit])
        console.log('MODIFIED PRODS', modifiedProds);

      }

      setPopupVisible(false);
  }

  const remove = ()=>{
    if (modif) {
      setDeletedProds([...deletedProds, product])
      console.log('DELETED PRODS', deletedProds);
    }
    removeproduct(product._id);
  }

    return (
      <>
        <View style={{flexDirection:'row'}}>
        <View style={styles.subLineContainer}>
          <View style={styles.treeLine}/>
        </View>
        <View style={styles.subItemContainer}>



      <Image source={{uri: URL+'/images/'+product.photo}} style={styles.img}/>


        
      
        <View style={styles.txtContainer}>
            <Text style={styles.txt3}>{product.productName}</Text>
        </View>
          
          <TouchableOpacity onPress={()=>setPopupVisible(true)}  style={styles.SubItemIcon} >
            <Feather name="edit" size={totalSize(2)} color = {Catalog_SubIcon}/>
          </TouchableOpacity>
            
          <TouchableOpacity onPress={remove} style={styles.SubItemIcon}>
            <AntDesign 
              name="delete"
              size={totalSize(2)}
              color = {Catalog_SubIcon}
           />
          </TouchableOpacity>

        </View>
      </View>

      { popupVisible &&
          <Popup>
            <ProductForm 
              values={product}
              cancel={()=>setPopupVisible(false)}
              action={editProduct}
            />
          </Popup>
      }
      </>
    )
}

const styles = StyleSheet.create({
    subItemContainer: {
        marginTop: h(2),
        flex: 1,
      
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: Primary
      },
      subLineContainer: {
        flexDirection: 'row-reverse',
        width: w(24),
        height: w(6),
        marginTop: 5,
        paddingLeft : 5,
      },

    subLineContainer: {
        flexDirection: 'row-reverse',
        width: w(24),
        height: w(6),
        marginTop: '1%',
        paddingLeft : 5,
      },
    treeLine: {
        width: (w(12) / 2) -5,
        height: (w(12)/2) + h(2)- 5 ,
        borderLeftWidth: 2,
        borderBottomWidth:1,
        borderColor: Primary
      },
    txtContainer:{
        flex:1,
        paddingLeft: 10,
      },
    SubItemIcon:{
        width: w(8),
        height: w(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Secondary
      },
      txt3: {
        fontSize: RFPercentage(2.7),
        color: color.WHITE
      },
      img:{
        width: w(15),
        height: w(15),


      }

})
