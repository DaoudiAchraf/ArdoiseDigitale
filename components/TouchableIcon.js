import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { w } from '../utils/Size';
import PropTypes from "prop-types";

const TouchableIcon = ({children,style,onPress}) =>{
    return (
        <TouchableOpacity 
          style={{...styles.container,...style}}
           onPress={onPress} 
        >

         {children}
        </TouchableOpacity>
    )
}


TouchableIcon.propTypes = {
    onPress: PropTypes.func,
   
};
  
TouchableIcon.defaultProps = {
    onPress: null,
    width: w(12),
    height: w(12),
 
};

export default TouchableIcon;

const styles = StyleSheet.create({
    container:{
        width: w(12),
        height: w(12),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F6F5',
        
    }
})
