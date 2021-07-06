import React, {useState,useEffect,useRef,useContext} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from './consts/colors';
import plants from './consts/plants';
import { Entypo,AntDesign,Feather } from '@expo/vector-icons';
import { color } from '../constants/Colors';
import DropDown from '../components/DropDown';
import { categories, subCategory } from '../constants/Arrays';
import { RFValue } from 'react-native-responsive-fontsize';
import { h, totalSize, w } from '../utils/Size';
import ClientService from '../services/Clientt';
import { setAlert } from '../components/Alert';
import { Context as SoukiContext} from '../contexts/Auth.context';
import { URL } from '../services/Client';

const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = ({navigation}) => {
  
  const getItemLayout = (data, index) => (
    { length: 50, offset: 50 * index, index }
  )

  const [subCategoryIndex, setSubCategoryIndex] = useState(0);

  const [category,setcategory] = useState({index:0});
  const flatListRef = useRef();

  const [products,setProducts] = useState([]);

  const { currentMerchant } = useContext(SoukiContext);

  useEffect(() => {

    const getCatalog= async()=>{
     const response =
     await ClientService.getMerchantCatalog(currentMerchant.user,category.index,subCategoryIndex);
     if(response.ok)
      setProducts(response.data)
     else setAlert("Une erreur se produit , Veuillez vérifier votre connexion Internet .")
    }

    flatListRef.current.scrollToIndex({
      animated: false,
      index: subCategoryIndex ,
    });

    
 

   getCatalog();

  }, [subCategoryIndex]);

  const renderItem = ({ item,index }) => (
    <TouchableOpacity
      style={{paddingRight:w(5)}}
      key={index}
      activeOpacity={0.8}
      onPress={() => setSubCategoryIndex(index)}
      >
      <Text
        style={[
          style.categoryText,
          subCategoryIndex === index && style.categoryTextSelected,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const CategoryList = () => {
    return (
    
      <View style={style.categoryContainer}>
         

    <FlatList
        ref={flatListRef}
        horizontal={true}
        data={subCategory[category.index]}
        renderItem={renderItem}
        keyExtractor={()=> new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
        getItemLayout={getItemLayout}
    />


      </View>

    

 
    );
  };

  const Card = ({product}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ProductDetails', product)}>
        <View style={style.card}>
          {/* <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: totalSize(4),
                height: totalSize(4),
                borderRadius: totalSize(2),
                marginBottom: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: product.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
            <AntDesign name="heart" size={totalSize(1.7)} color="black" />
            </View>
          </View> */}

          <View
            style={{
              borderWidth:1,
              flex:1,
          
            }}>
            <Image
              source={{
                uri: URL+"/images/1625571121448.jpg",
              }}
              style = {{resizeMode:'contain',height: '100%',width:'100%'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {product.productName}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              {product.price} DT
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#344E41'}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold' ,color: color.WHITE}}>Bienvenue Chez</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            abdallah store
          </Text>
        </View>
        <Entypo name="shop" size={28} color="black" />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
           
           <View style={{flex:1}}>
               <DropDown
                 mode="rounded"
                 items={categories}
                 selectedItem={category}
                 handleChange={setcategory}
               />
           </View>
      
        <View style={style.sortBtn}>
        <Entypo name="shop" size={30} color="black" />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return <Card product={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
  },
  categoryText: {fontSize: RFValue(15), color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: h(33),
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: totalSize(1.7),
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;