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
import { TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from './consts/colors';
import { Entypo,FontAwesome,AntDesign } from '@expo/vector-icons';
import { color } from '../constants/Colors';
import Dialog from '../components/Dialog';
import { categories, subCategory } from '../constants/Arrays';
import { RFValue } from 'react-native-responsive-fontsize';
import { totalSize, w } from '../utils/Size';
import ClientService from '../services/Clientt';
import { setAlert } from '../components/Alert';
import { URL } from '../services/Client';
import { Badge } from 'react-native-paper';
import { Provider } from 'react-native-paper';
import CategorySelector from './Client_Catalog/CategorySelector';
import Filter from "../assets/svg-icones-client/filter.jsx";
import { GlobalContext as OrderContext } from '../contexts/ProductsCatalog.context';
import Myappbar from '../components/componentsClient/Myappbar';

const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = ({navigation,route}) => {

  //console.log('render from catalog----------------------------');

  const getItemLayout = (data, index) => (
    { length: 100, offset: 100 * index, index }
  )

  const [subCategoryIndex, setSubCategoryIndex] = useState(0);

  const [category,setcategory] = useState({array:categories,index:0});

  const flatListRef = useRef();

  const [products,setProducts] = useState([]);

  const [visible, setVisible] = useState(false);

  const cart = useContext(OrderContext);

  const { currentMerchant, ardoiseId,client } = route.params;




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
        style={{borderWidth:0,flex:1}}
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
              borderBottomWidth:2.5,
              borderColor: color.lightPrimary,
              flex: 0.7,
              paddingTop: '6%',
              paddingBottom: '4%'
            }}>
            <Image
              source={{
                uri: `${URL}/images/${product.photo}`,
              }}
              style = {{resizeMode:'contain',height: '100%',width:'100%'}}
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex:0.3,
              paddingTop: '2%',
              paddingBottom: '2%',
            }}>

            <Text style={{fontSize: RFValue(15), textAlign: 'center'}}>
              {product.productName}
            </Text>
   
            <Text style={{fontSize:RFValue(16), fontWeight: 'bold', textAlign: 'center'}}>
              {product.price} DT
            </Text>

          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Provider>

      <View style={{backgroundColor:color.Secondary}}>
      <Myappbar
            title="Catalogue"
            // subtitle="Vous avez 3 nouvelles notifications"
            navigation={navigation}
       
          />
      </View>


          
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: color.WHITE}}>
             

   
      <View style={style.header}>


        <View style={{flex:1}}>
          <Text style={{fontSize: 20, fontWeight: 'bold' ,color: color.Primary}}>Bienvenue Chez</Text>
          <Text style={{fontSize: 20, color: COLORS.green, fontWeight: 'bold'}}>
            Ahmed store 
          </Text>
        </View>

        <TouchableOpacity 
          onPress={()=>navigation.navigate("NouvelleCommande",{currentMerchant,ardoiseId,client})}
          style={{marginTop:'0%'}}>
          <Badge style={{marginBottom:'-15%'}}>
            <Text style={{fontWeight:'bold',fontSize: RFValue(14)}}>
              {cart.products.filter(item=>item.owner === currentMerchant.user).length}
            </Text>
            
          </Badge>
          <FontAwesome 
            name="shopping-cart" 
            size={totalSize(5)} 
            style={{marginRight:'6%'}}
            color={color.Primary} />
        </TouchableOpacity>
        
        
      </View>
      <View style={{marginTop: 30}}>
           <View style={{flexDirection: 'row',alignItems: 'center'}}>
              <Filter color={color.Primary} width={RFValue(15)} height={RFValue(15)} />
              <Text style={{...style.categTxt,fontWeight:'bold'}}>Catégorie :</Text> 
          
           </View>
           
           <TouchableOpacity style={style.dropDown} onPress={()=>setVisible(true)}>
       
                <View style={{borderWidth:0,flexDirection: 'row',alignItems: 'center'}}>

                  <View style={{flexDirection: 'row',alignItems:'center'}}>
                    {categories[category.index].icon(style.icon)}
                    <Text style={{fontSize: RFValue(15)}}>
                      {categories[category.index].name}
                    </Text>
                  </View>

                    
                </View>
                
                <Entypo name="chevron-down" size={RFValue(20)} color="black" />
                {visible &&
                <Dialog visible={visible} setVisible={setVisible}>
                  <CategorySelector
                    categories= {categories}
                    category ={category}
                    setCategory ={setcategory}
                    setVisible={setVisible}
                  />
               </Dialog>}



           </TouchableOpacity>
      
        {/* <View style={style.sortBtn}>
        <Entypo name="shop" size={30} color="black" />
        </View> */}
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
          width: '100%'
        }}
        numColumns={2}
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return <Card product={item} />;
        }}
      />
   
    </SafeAreaView>
    </Provider>
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
    color: color.Secondary,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: color.Secondary,
  },
  card: {
    width: width,
    height: 150,

    //borderWidth: 0.5,
    //borderColor: color.Primary ,
    backgroundColor: COLORS.light,

    borderRadius: 10,
    marginBottom: 20,
    //padding: totalSize(1.7),
  },
  header: {
    borderTopWidth:0,paddingTop:'4%',
    marginTop: '0%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  dropDown:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    padding:10,
    borderRadius:10,
    marginTop: '2.5%'
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
  categTxt:{
    fontSize: RFValue(15),
    color: color.Primary,
    marginLeft: '3%'
  },
  icon:{
    width: totalSize(3.3),
    height:  totalSize(3.3),
    marginRight: '5%'
  }
});
export default HomeScreen;