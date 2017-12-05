import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Button, CardSection, CardSectionBox, CardSectionBoxItem } from './common';
import { cityDelete, clearWeather } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class WeatherListItem extends Component {
  state = {
    longPressed: false,
    hidden: false
  };

  onLongPress() {
    this.setState({ longPressed: true });
  }

  onDeletePress() {
    this.props.cityDelete(this.props.city.name.toLowerCase());
    this.setState({ hidden: true });
    
  }

  renderItem(city) {
    const { name, main, weather, cod } = city;
    if(city.cod != 200) {return };
    if(this.state.hidden) {
      return ;
    }
    if (!this.state.longPressed) {
      return (
        <TouchableHighlight onLongPress={() => this.onLongPress()}>
          <View>
            <CardSection>
              <CardSectionBox style={{ flex: 1 }}>
                <CardSectionBoxItem>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {name}
                  </Text>
                </CardSectionBoxItem>
              </CardSectionBox>

              <CardSectionBox style={{ flex: 4 }}>
                <View style={{ flexDirection: 'row' }}>
                  <CardSectionBox style={{ flex: 2 }}>
                    <CardSectionBoxItem>
                      <Text>{weather[0].main}</Text>
                    </CardSectionBoxItem>
                    <CardSectionBoxItem>
                      <Text>{weather[0].description}</Text>
                    </CardSectionBoxItem>
                  </CardSectionBox>

                  <CardSectionBox>
                    <CardSectionBoxItem>
                      <Text>Temp:</Text>
                    </CardSectionBoxItem>
                    <CardSectionBoxItem>
                      <Text>{main.temp}</Text>
                    </CardSectionBoxItem>
                  </CardSectionBox>

                  <CardSectionBox>
                    <CardSectionBoxItem>
                      <Text>Pre:</Text>
                    </CardSectionBoxItem>
                    <CardSectionBoxItem>
                      <Text>{main.pressure}</Text>
                    </CardSectionBoxItem>
                  </CardSectionBox>

                  <CardSectionBox>
                    <CardSectionBoxItem>
                      <Text>Hum:</Text>
                    </CardSectionBoxItem>
                    <CardSectionBoxItem>
                      <Text>{main.humidity}</Text>
                    </CardSectionBoxItem>
                  </CardSectionBox>
                </View>
              </CardSectionBox>
            </CardSection>
          </View>
        </TouchableHighlight>
      );
    }
    return (
      <CardSection>
        <Button onPress={() => this.onDeletePress()}>Delete {name}?</Button>
      </CardSection>
    )
  }

  render() {
    return <View>{this.renderItem(this.props.city)}</View>;
  }
}

export default connect(null, { cityDelete, clearWeather })(WeatherListItem);
