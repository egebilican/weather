import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection, Input, Button } from './common';
import { cityChanged, cityAdd } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class WeatherAdd extends Component {
  renderBackButton() {
    if(this.props.cityList.length> 0) {
      return (
        <CardSection>
        <Button onPress={() => this.onBackButtonPress()}>Back</Button>
      </CardSection>
      )
    }
  }

  onButtonPress() {
    if (this.props.cityForm) {
      this.props.cityAdd(this.props.cityForm);
    }
  }

  onBackButtonPress() {
    Actions.weatherList({type:'reset'});    
  }

  render() {
    return (
      <View style={{ justifyContent: 'center' }}>
        <View>
          <CardSection>
            <Input
              label="City"
              placeholder="Ankara"
              onChangeText={text => this.props.cityChanged(text)}
              value={this.props.city}
            />
          </CardSection>
          <CardSection>
            <Button onPress={() => this.onButtonPress()}>Add</Button>
          </CardSection>
          {this.renderBackButton()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ cityForm, cityList }) => {
  return { cityForm, cityList };
};

export default connect(mapStateToProps, { cityChanged, cityAdd })(WeatherAdd);
