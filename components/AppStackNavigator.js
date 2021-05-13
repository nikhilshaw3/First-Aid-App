import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import FirstAidScreen from '../screens/FirstAidScreen'
import CovidScreen from '../screens/CovidScreen'
import UseScreen from '../screens/UseScreen'
import DetailsScreen from '../screens/DetailsScreen'

export const AppStackNavigator = createStackNavigator({
    
FirstAidScreen : {
screen : FirstAidScreen,
navigationOptions:{headerShown : false}
},

CovidScreen : {
screen : CovidScreen,
navigationOptions:{headerShown : false}
},

DetailsScreen : {
screen : DetailsScreen,
navigationOptions:{headerShown : false}
}
},

{
initialRouteName: 'FirstAidScreen'
}
);