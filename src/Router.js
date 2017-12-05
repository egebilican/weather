import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import WeatherList from './components/WeatherList';
import WeatherAdd from './components/WeatherAdd';

const routerComponent = () => {
  return (
    <Router>
      <Scene key="root">
    
        <Scene
          key="weatherAdd"
          component={WeatherAdd}
          title="Add new city"
          initial
        />
        <Scene 
          key="weatherList" 
          component={WeatherList} 
          title="Weather List" 
        />
      </Scene>
    </Router>
  );
};

export default routerComponent;
