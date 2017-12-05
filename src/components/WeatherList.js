import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchWeather, clearWeather } from '../actions';
import { Button, CardSection } from './common';
import WeatherListItem from './WeatherListItem';
import { Actions } from 'react-native-router-flux';

//text adjustsFontSizeToFit = true

class WeatherList extends Component {
  componentWillMount() {
    this.props.cityList.map(city => this.props.fetchWeather(city));
  }

  onButtonPress() {
    this.props.clearWeather();
    Actions.weatherAdd();
  }

  render() {
    console.log('citylist', this.props.cityList);
    console.log('weather', this.props.weather);

    return (
      <View>
        <FlatList
          data={this.props.weather}
          renderItem={({ item }) => {
            return <WeatherListItem city={item} />;
          }}
          keyExtractor={item => item.name}
        />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>Add City</Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = ({ weather, cityList }) => {
  return { weather, cityList };
};

export default connect(mapStateToProps, { fetchWeather, clearWeather })(
  WeatherList
);
