import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import {h} from '../utils/Size';

export default function ImagePickerExample({handleChange,image,error}) {
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
      Photo de la CIN 
    </Button>

    /* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */
  );
}
