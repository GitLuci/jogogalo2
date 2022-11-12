import React,{useState} from "react";
import {StyleSheet,Text,View, TouchableOpacity,Alert,Button} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

export default class Jogo extends React.Component{
constructor(props){
  super(props);

  this.state ={
    gameState:[
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ],
  currentPlayer: 1,
  
  }
}

componentDidMount(){
  this.initializeGame();
}

initializeGame = () => {
this.setState({gameState:
    [
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ],
    currentPlayer: 1,
  });
}
//return 1 if player 1 wibm -1 if player 2 won, or 0 if no one has won
getWinner = ()=>{
  const NUM_TILES = 3;
  var arr = this.state.gameState;
  var sum;

  //checkrows...
  for (var i = 0; i < NUM_TILES;i++){
    sum= arr[i][0] + arr[i][1] + arr[i][2];
    if (sum==3){return 1;}
    else if(sum == -3){return -1; }
  }
  //check columns
  for (var i = 0; i < NUM_TILES; i++){
    sum=arr[0][i] + arr[1][i] + arr[2][i]; 
    if (sum==3){return 1;}
    else if(sum == -3){return -1; }
  }

  //check the diagonals
  sum = arr[0][0] + arr[1][1] + arr[2][2];
  if (sum==3){return 1;}
  else if(sum == -3){return -1; }

  sum = arr[2][0] + arr[1][1] + arr[0][2];
  if (sum==3){return 1;}
  else if(sum == -3){return -1; }

  //there are no winners...
  return 0;
}

onTilePress = (row,col) => {
  //dont allow tiles to change
  var value = this.state.gameState[row][col];
  if (value !== 0){return;}


  //grab current player
  var currentPlayer = this.state.currentPlayer;

  //set the correct tile
  var arr = this.state.gameState.slice();
  arr [row][col] = currentPlayer;
  this.setState({gameState: arr});

  //switch to other player

  var nextPlayer= (currentPlayer == 1) ? -1 : 1;
  this.setState({currentPlayer:nextPlayer});

  //check for winners
  var winner = this.getWinner();
  if (winner == 1){
    Alert.alert("Player 1 is the winner");
    this.initializeGame();

  }else if (winner == -1){
    Alert.alert("Player 2 is the winner");
    this.initializeGame();
  }
}

onNewGamePress = () =>{
  this.initializeGame();
}

renderIcon = (row,col)=>{
  var value = this.state.gameState[row][col];
  switch(value)
  {
    case 1: return <Icon name = "close" style = {styles.tileX}/>;
    case -1: return <Icon2 name = "circle" style = {styles.tileO}/>;
    default : return <View/>;
  }
}


  render(){
      return(
      <View style = {styles.container}>

          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity OnPress={()=> this.onTilePress(0,0)} style={[styles.tile,{borderLeftWidth:0,borderTopWidth:0}]}>
              {this.renderIcon(0,0)}
            </TouchableOpacity>

            <TouchableOpacity OnPress={()=> this.onTilePress(0,1)} style={[styles.tile,{borderTopWidth:0}]}>
            {this.renderIcon(0,1)}
            </TouchableOpacity>

            <TouchableOpacity  OnPress={()=> this.onTilePress(0,2)} style={[styles.tile,{borderRightWidth:0,borderTopWidth:0}]}>
            {this.renderIcon(0,2)}
            </TouchableOpacity>

          </View>

          <View style={{flexDirection:"row"}}>

            <TouchableOpacity OnPress={()=> this.onTilePress(1,0)}  style={[styles.tile,{borderLeftWidth:0}]}>
            {this.renderIcon(1,0)}
            </TouchableOpacity>
            <TouchableOpacity  OnPress={()=> this.onTilePress(1,1)} style={[styles.tile,{}]}>
            {this.renderIcon(1,1)}
            </TouchableOpacity>
            <TouchableOpacity  OnPress={()=> this.onTilePress(1,2)} style={[styles.tile,{borderRightWidth:0}]}>
            {this.renderIcon(1,2)}
            </TouchableOpacity>

          </View>


          <View style={{flexDirection:"row"}}>

            <TouchableOpacity  OnPress={()=> this.onTilePress(2,0)} style={[styles.tile,{borderBottomWidth:0,borderLeftWidth:0}]}>
            {this.renderIcon(2,0)}
            </TouchableOpacity>
            <TouchableOpacity  OnPress={()=> this.onTilePress(2,1)} style={[styles.tile,{borderBottomWidth:0}]}>
            {this.renderIcon(2,1)}
            </TouchableOpacity>
            <TouchableOpacity  OnPress={()=> this.onTilePress(2,2)} style={[styles.tile,{borderBottomWidth:0,borderRightWidth:0}]}>
            {this.renderIcon(2,2)}
            </TouchableOpacity>

          </View>

      <View style={{paddingTop:50}}/>
      <Button title="New Game" onPress={this.onNewGamePress}/>
      </View>
      
  );
  }
}
    
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#D3D3D3',
    alignItems:'center',
    justifyContent:'center',

  },

  tile:{
    borderWidth:10,
    width:100,
    height:100,
  },

  tileX:{
    color:"red",
    fontSize:60,
  },
  tileO:{
    color:"green",
    fontSize:60,
  }

});