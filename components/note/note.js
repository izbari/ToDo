import React from 'react';
import {TouchableOpacity ,View,Text} from 'react-native';
import styles from './note.style';
function note(props){
return(
    
    <TouchableOpacity style= {styles[props.theme].noteContainer} onLongPress={props.deleteHandler} onPress={props.itsDone}>
        
        <Text  style={styles[props.theme].noteTextContainer}>{props.desc}</Text>
        
    </TouchableOpacity>


    )
}
export default note;
