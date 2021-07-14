import React, { useState, useEffect } from "react";
import { Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import {h, w} from '../utils/Size';
import PropTypes from "prop-types";

const ImagePickerC = ({handleChange,image,error,title,display}) => {
 // const [image, setImage] = useState(null);

  const setImage =(img)=>{
      handleChange(img);
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });



    if (!result.cancelled) {
        const img = {
          name: 'photo.jpg',
          uri: result.uri,
          type: "image/"+result.uri.substr(result.uri.lastIndexOf('.') + 1)
        }


         setImage(img);

         
    }
  };

  return (
    <>
    <Button
      icon=  {image ? "check" : "camera-plus" }
      mode="outlined"
      color="#426252"
      onPress={pickImage}
      style={{ 
        marginBottom: '7%',
        marginTop: '3%',
        borderColor: error? 'red': '#426252'
        
      }}
    >

      {image ? "changer photo" : title}
    </Button>

    {display && image && <Image source={{ uri: image.uri }} style={{alignSelf:'center' ,width: w(40), height: w(30),marginBottom:h(1) }} />} 
    </>
  );
}

export default ImagePickerC;

ImagePickerC.propTypes = {
  title: PropTypes.string,
}

ImagePickerC.defaultProps = {
  title: 'Photo de la CIN',
}