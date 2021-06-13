import { Alert } from "react-native";


export const isValid = (object_to_check,errors,setError)=>{

  let error = false;

  const keys = Object.keys(object_to_check);

  keys.forEach((key) =>{

      if (!object_to_check[key])
      {
        error = true;
        errors[key] = true;
        const newError = {...errors};
        newError[key] =true;
        setError(newError);
      }
          
  });

  error && 
  setAlert('Veuillez remplir le(s) champs en rouge pour continuer.');

  return !error;
}



export const isValidWithoutAlert = (object_to_check,errors,setError)=>{

  let error = false;

  const keys = Object.keys(object_to_check);

  keys.forEach((key) =>{

      if (!object_to_check[key])
      {
        error = true;
        errors[key] = true;
        const newError = {...errors};
        newError[key] =true;
        setError(newError);
      }
          
  });

  return !error;
}



export const setAlert = (msg) =>
    Alert.alert(
      "Ooups !",
       msg,
      [
        {
          text: "Ok",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      
      ]
    );



