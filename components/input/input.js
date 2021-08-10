import React from 'react'
import { 
    View,
    TextInput,
    TouchableOpacity,
    Text,
    
 } from 'react-native';
 import styles from './input.style'

 function input(props){
     return(
        <View style={styles.inputContainer}>
          
            <TextInput multiline={true} value={props.desc} placeholder='Yapılacak...' placeholderTextColor='#7C7D7D' 
            style={styles.inputBar} onChangeText={props.onChangeText}/>

            <TouchableOpacity  onPress={props.saveHandler}>
                <View style={styles.butonView}>
                   
                <Text style={styles.butonText}>
                KAYDET
                </Text>
                </View>
            </TouchableOpacity>
            
        </View>
        
        
        )
 }
 export default input;