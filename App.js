

      import React,{useEffect,useState} from 'react';
      import {
        SafeAreaView,
        StyleSheet,
        Text,
        View,
        Alert,
        FlatList,
      } from 'react-native';
      import Input from './components/input'
      import Note from './components/note';
      import AsyncStorage from '@react-native-async-storage/async-storage';
  
      function App() {

      const [gelentext,setgelentext] = useState("");  
     const [note,setNote] = useState([]);  
       


  useEffect(() => {
          getTodosFromUserDevice()
         },[]);
       
        useEffect(() => {
         saveTodosUserDevice(note)
        },[note]);

    
      
        const getTodosFromUserDevice = async ()=>{
          try {
            const todos= await AsyncStorage.getItem('note');
            if(todos != null){
              setNote(JSON.parse(todos));
            }
          } catch (error) {
            console.log(error)
          }
        }


        const saveTodosUserDevice = async note => {
          try {
          const stringifyTodos = JSON.stringify(note)
          await AsyncStorage.setItem("note", stringifyTodos)
        } catch (e) {
          console.log("hata save kısmında")

          console.log(e)
        }}


     
       
        const Todo = ({todo}) =>{
          return(
              <Note deleteHandler={()=> deleteTodo(todo.id)} desc={todo.desc} itsDone={()=>isCompleted(todo.id)} 
          theme={!todo?.completed ? "defaultNote" : "pressedNote"}/>
        )
      
        }
        const isCompleted = (todoId) =>{
         const newTodos= note.map((item =>{
           if(item.id == todoId){
             return {...item,completed:!item.completed}
            
           }
           
           return item;
          }
         ))
         
         setNote(newTodos);
         
        }
        const deleteTodo = (todoId) =>{
          const newTodos= note.filter(item =>{ return item.id != todoId});
          console.log("Yeni :" ,{todoId});
          
          console.log("Yeni todos:" ,{newTodos});
         setNote(newTodos);
        
        };
      const addNote= () =>{
        console.log(gelentext)
       
       if(gelentext==''){
         Alert.alert('bişey yazmadın')
       }
         else{
          const newNote= {

            id: Math.random(),
            desc: gelentext,
            completed: false,
          };
  
          setNote([...note,newNote])
          setgelentext('')
               }
       
      }
     
              console.log(note)
              return(

              <SafeAreaView style={styles.container}>
              <View style = {styles.containerInner}>

              <View style = {styles.textContainer}>
                <Text style={styles.Header}>YAPILACAKLAR</Text>
                <Text style={styles.noteCounter}>{note.length}</Text>
              </View>

              <FlatList 
              data = {note}
              renderItem={({item})=> <Todo todo={item}/>}>
              </FlatList>

              <Input desc ={gelentext} onChangeText={setgelentext} saveHandler= {addNote}/>

              </View>
              </SafeAreaView>


              )};




              const styles =StyleSheet.create({
              container: {
                flex:1,
                backgroundColor:'#102027',

              },
              containerInner: {
                backgroundColor:'#102027',
                flex: 1,
                },
              textContainer: {
              flexDirection: 'row',justifyContent: 'space-between'

              },
              Header: {marginBottom:30,
                marginTop: 50,
                color: '#FFA500',
                fontSize : 34,
                fontWeight : 'bold',
                marginLeft: 20,
              },noteCounter: {
                marginTop: 50,
                marginRight: 16,
                color: '#FFA500',
                fontSize : 34,
                fontWeight : 'bold',
                marginLeft: 10,
                
              }


              });


              export default App;
