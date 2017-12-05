import React from 'react';
import {View} from 'react-native';


//primitives take array of styles, right overrides left
const CardSectionBoxItem = (props) => {
  return (
    <View style={[styles.containerBoxItemStyle, props.style]}>
     {props.children}
    </View>
  );
};

const styles = {
  containerBoxItemStyle: {
    flex:1,
  }
}

export {CardSectionBoxItem};
