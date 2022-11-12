import React from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Jogo from './screens/Jogo';
import Historico from './screens/Historico';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();




export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name = 'Home'
            component={Home}
            options={{tabBarIcon:()=>(
            <Icon name="home" size={30} />
            )
            }}
            />
            <Tab.Screen name = 'Jogo' component={Jogo}
            options={{tabBarIcon:()=>(
            <Icon name="hash" size={30} />
            )
            }}/>
            <Tab.Screen name = 'Historico' component={Historico}
            options={{tabBarIcon:()=>(
            <Icon2 name="history-edu" size={30} />
            )
            }}/>
        
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        home:{
            color:"red",
            fontSize:60,
        }
  
  }});