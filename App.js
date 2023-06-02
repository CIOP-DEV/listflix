import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';

//export default class App extends Componet {
  export default function App() {

    //Estado para armazenar os dados
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
      
      async function loadFilmes(){
        //Rota filmes

        //T1: Network Erro
        try {
          // Processar a resposta
          const response = await api.get('/filmes').then((response) => {
            //console.log(response.data);
            setFilmes(response.data);
          });
          
          
        } catch (error) {
          console.error('Ocorreu um erro de rede:', error);
          // Lidar com o erro de rede
          if (error.response) { 
            // client received an error response (5xx, 4xx)
            console.log('Respose: ',error.response);
          } else if (error.request) { 
            // client never received a response, or request never left 
            console.log('Request: ', error.request);
          } else { 
            // anything else 
            console.log('Erro: ',error);
          } 

          }
        
      }

      loadFilmes();
      },[]);
    return (
      <View style={styles.container}>
       <Text>FILMES</Text>
       <FlatList
        data={filmes}
        keyExtractor={ item => String(item.id)}
        renderItem={({item}) => <Filmes data={item}/> }
       />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
