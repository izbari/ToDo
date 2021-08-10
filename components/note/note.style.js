import { StyleSheet } from 'react-native'

const base_style = StyleSheet.create({
    noteContainer: {
        flex: 1 ,
        width: '90%',
        borderRadius : 10,
        margin : 10,
        justifyContent : 'center',
        marginLeft : 22,
        padding : 10,
        paddingTop:15,
    },
    noteTextContainer:{  flex: 0.8 ,
        fontSize :16,
        fontWeight : 'bold',
    },
   
})

export default  {

    defaultNote: StyleSheet.create({
        ...base_style,
        noteContainer: {
            ...base_style.noteContainer,
            backgroundColor:'#7DA453',
            
        },
        noteTextContainer:{
            ...base_style.noteTextContainer,
            color:'#ffffff',
        },
        
    }),
     pressedNote: StyleSheet.create({
         ...base_style,
        noteContainer: {
            ...base_style.noteContainer,
            backgroundColor:'#37474F',
        },
        noteTextContainer:{
            ...base_style.noteTextContainer,
            fontStyle: 'italic',
            color:'#7C7D7D',
            textDecorationLine: 'line-through',
        },
    
           

    }),
}