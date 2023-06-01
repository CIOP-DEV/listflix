import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './src/Services/Api';

//export default class App extends Componet {
  export default function App() {
  constructor(props){
    super(props);
    this.state = {
      filmes: []
    }
  }
  
  async componentDidMount(){
    const response = await api.get('/filmes');
    this.setState({
      filmes: response.data
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.filmes}
          keyExtractor={(item) => String(item.id)} //converte em string
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
