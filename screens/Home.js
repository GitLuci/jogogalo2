import React,{useState} from "react";
import {Text,View,StyleSheet} from 'react-native';

export default function Home (navigation){
return(
    <View style={styles.container3}>
        <Text style={styles.container}>Estrutura do codigo</Text>
        <Text style={styles.container2}>Menu inicial</Text>
        <Text style={styles.container2}>O Jogo</Text>
        <Text style={styles.container2}>E o historico </Text>
        <Text style={styles.container}>Como jogar</Text>
        <Text style={styles.container2}>O primeiro jogador marca um dos espaços em branco da malha
        e depois o segundo jogador devera marcar outro ponto da malha, quem completar uma fileira completa (em diagonal, horizontal
        ou vertical) ganha. Divirta-se !</Text>

        <Text style={styles.container}> Problemas acerca do codigo</Text>
        <Text style={styles.container2}>TouchableOpacity não funcional</Text>
        <Text style={styles.container2}>Historico não funcional</Text>
    </View>
);

}


const styles = StyleSheet.create({
    container:{
        flex:0.1,
        backgroundColor: '#D3D3D3',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:40,
        fontSize:20,
        fontWeight: 'bold',
        
    
      },
    container2:{

        backgroundColor: '#D3D3D3',
        alignItems:'center',
        justifyContent:'center',
        fontSize:15,
        paddingLeft:20,
        paddingRight:20,
        
    
      },
    container3:{
        flex:1,
        backgroundColor: '#D3D3D3',
        alignItems:'center',
        justifyContent:'center',

        
    
      },

  
  });