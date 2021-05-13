import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import Setting from '../screens/SettingScreen';
import UseScreen from '../screens/UseScreen';
import {Icon} from 'react-native-elements';
import AddScreen from '../screens/FirstAidAddScreen';
import RateScreen from '../screens/RateScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  HOME : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />,
      
    }
    },
  Setting : {
    screen : Setting,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "SETTING",
     
    }
  },
  UseScreen: {
    screen : UseScreen,
    navigationOptions:{
      drawerIcon : <Icon name="help" type ="fontawesome5" />,
      drawerLabel : "HOW TO USE THIS APP",
     
    },
  },
  AddScreen : {
    screen : AddScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "ADD A FIRST AID TIP",
      marginTop: '2000'
    }
  },
  RateScreen : {
    screen : RateScreen,
    navigationOptions:{
      drawerIcon : <Icon name="adjust" type ="font-awesome" />,
      drawerLabel : "RATE THIS APP",
      marginTop: '2000'
    }
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
