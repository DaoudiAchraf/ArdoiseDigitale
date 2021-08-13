import React, { useState,useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { h, totalSize, w } from '../utils/Size';
import { AntDesign ,MaterialIcons, Feather } from '@expo/vector-icons'; 
import { Primary, Secondary ,Catalog_SubIcon ,color } from '../constants/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ProductCard from './ProductCard';
import Popup from './Popup';
import { categories } from "../constants/Arrays";
import ProductForm from './ProductForm/ProductForm';

import { GlobalContext } from "../contexts/ProductsCatalog.context";
import { v4 as uuidv4 } from 'uuid';

export default function SubCategory({name,categ,subCateg,sub,modif}) {

    //console.log("render from categ:subCateg ",categ ,':',subCateg);

    const { addproduct,products, addedProds, setAddedProds } = useContext(GlobalContext);
  

    const [itemExpanded ,setItemExpanded] = useState(false);
    //const [products,setProducts] = useState([]);
    const [popupVisible,setPopupVisible] = useState(false);
    const [popupVisible1,setPopupVisible1] = useState(false);

    const createProduct = (product)=>{

      if(modif)
      {
        setAddedProds([...addedProds, {...product, category: categ, subCategory: subCateg }]);
        console.log('ADDED PRODS', addedProds);
      }

      addproduct({
        ...product,
        _id: uuidv4(),
        category: categ,
        subCategory: subCateg,
      });

      setItemExpanded(true);
      console.log(products);    
    }


    

    const deleteProduct = (index)=>{
      products.splice(index, 1);
      setProducts([...products]);
    }
    console.log("555555555555555555",products);

    return (
        
<>
    <View style={{flexDirection:'row'}}>
          <View style={styles.LineContainer}>
            <View style={styles.treeLine}/>
          </View>
          <View style={styles.itemContainer}>
              {sub.icon(styles.icon)}
          
            <View style={styles.txtContainer}>
              <Text style={styles.txt2}>{name}</Text>
            </View>
            
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={()=>setPopupVisible(true)}
            >
                <MaterialIcons
                  name="playlist-add"
                  size={totalSize(3.5)}
                  color="black"
                />
            </TouchableOpacity>
          </View>
    </View>
      
        {(itemExpanded || modif) && 
         products.filter(product => (product.subCategory === subCateg)&&(product.category === categ)).map((item,index) =>
            <ProductCard 
               key={item._id}
               product={item}
               modif={modif}
            />     
        )} 

        { popupVisible &&
          <Popup>
            <ProductForm 
              values={null}
              cancel={()=>setPopupVisible(false)}
              action={createProduct}
            />
          </Popup>
        }
 </>
       
    )
}

const styles = StyleSheet.create({    
      SubItemIcon:{
        width: w(8),
        height: w(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Secondary
      },
      txtContainer:{
        flex:1,
        paddingLeft: 15,
      },
      treeLine: {
        width: (w(12) / 2) -5,
        height: (w(12)/2) + h(2)- 5 ,
        borderLeftWidth: 2,
        borderBottomWidth:1,
        borderColor: Primary
      },
      LineContainer: {
        flexDirection: 'row-reverse',
        width: w(12),
        height: w(12),
        marginTop: '2.2%',
        paddingLeft : 5,
      },
      itemContainer: {
        marginTop: h(2),
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.3,
      },
      iconContainer : {
        width: w(12),
        height: w(12),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F6F5',
        borderLeftWidth: 0.3
      },
      icon:{
        width:w(12),
        height:w(12)
      },
      txt2: {
        fontSize: RFPercentage(2.3)
      },
})