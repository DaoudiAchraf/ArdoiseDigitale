import React, { useState,useContext, useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,CheckBox } from 'react-native'
import { h, totalSize, w } from '../utils/Size';
import { Primary, Secondary ,Catalog_SubIcon ,color } from '../constants/Colors';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import Popup from './Popup';
import ProductForm from './ProductForm/ProductForm';
import { GlobalContext } from '../contexts/ProductsCatalog.context';

import { URL } from '../services/Client';

export default function ProductCard({quantity,product, modif,checkable,commande,setCommande}) {


  const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    const index = commande.listOf_RefusedProducts.indexOf(product._id);
    console.log(index);
    if (!isSelected) {
      setCommande({...commande, listOf_RefusedProducts: [...commande.listOf_RefusedProducts, product._id]})
    }else{
      setCommande({...commande, listOf_RefusedProducts: [...commande.listOf_RefusedProducts.slice(0,index), ...commande.listOf_RefusedProducts.slice(index+1)]})
    }
    console.log('abaaaaaaaaaaaaay', commande);

  }, [isSelected])

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
          
        { checkable ? null: 
          <View style={styles.subLineContainer}>
            <View style={styles.treeLine}/>
          </View> 
        }
        <View style={styles.subItemContainer}>



      { modif || checkable ? 
      <Image 
       source={{uri: URL+'/images/'+product.photo}}
       style={ checkable? styles.img4Check:styles.img}
      />:
      <Image 
      source={{uri:product.photo.uri}}
      style={ checkable? styles.img4Check:styles.img}
     />
      }



        
      
        <View style={styles.txtContainer}>
            <Text style={styles.txt3}>{product.productName}</Text>
        </View>
          
          <TouchableOpacity onPress={()=>setPopupVisible(true)}
            style={ styles.SubItemIcon} >
          { checkable ? 
            <Text style={{fontSize:RFValue(12),color:color.WHITE,fontWeight:'bold'}}>x {`${quantity}`}</Text>
            :<Feather name="edit" size={totalSize(2)} color = {Catalog_SubIcon}/>
          }
          </TouchableOpacity>
            
          <TouchableOpacity onPress={remove} 
          
          style={ checkable ? {...styles.SubItemIcon,backgroundColor:color.WHITE} :styles.SubItemIcon}
          >
            { checkable ?
                    <CheckBox
                      value={isSelected}
                      onValueChange={setSelection}
                      style={styles.checkbox}
                    />
                    :
                    <AntDesign 
                      name="delete"
                      size={totalSize(2)}
                      color = {Catalog_SubIcon}
                   />
            }



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
        height: w(15)
      },
      img4Check:{
        width: w(12),
        height: w(12)
      }

})
