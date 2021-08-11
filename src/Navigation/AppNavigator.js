import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ReelsScreen from './../screens/ReelsScreen';
import ActivityScreen from './../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions={{showLabel: false}}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({size}) => (
          <Foundation name="home" size={size} color={'#3d3d29'} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({size}) => (
          <Feather name="search" size={size} color={'#3d3d29'} />
        ),
      }}
    />
    <Tab.Screen
      name="Reels"
      component={ReelsScreen}
      options={{
        tabBarIcon: ({size}) => (
          <MaterialCommunityIcons
            name="movie-search-outline"
            size={size}
            color={'#3d3d29'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Activity"
      component={ActivityScreen}
      options={{
        tabBarIcon: ({size}) => (
          <AntDesign name="hearto" size={size} color={'#3d3d29'} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({size}) => (
          <Image
            source={require('../../assets/anand.jpg')}
            style={{width: 30, height: 30, borderRadius: 15}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
