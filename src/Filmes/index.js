//rnf
import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Detalhes from '../Detalhes';

export default function Filmes({data}) {
  //controla a abertura do modal
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>

      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <Image 
          source={{uri: data.foto}}
          style={styles.capa}
        />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} animationType='slide' visible={visibleModal}>
          <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
        </Modal>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 15,
    elevation: 2 //sombra
  },
  capa: {
    height: 250,
    zIndex: 2, //tipo layer do unity
  },
  titulo:{
    padding: 15,
    fontSize: 18
  },
  areaBotao: {
    alignItems: 'flex-end', //botão no final
    marginTop: -45,
    zIndex: 9
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5, //borda superior esquerda arrendodada
    borderBottomLeftRadius: 5, //borda inferior esquerda arrendodada
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold' //negrito
  }

})