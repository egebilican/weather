import React from 'react';
import {View} from 'react-native';


//primitives take array of styles, right overrides left
const CardSectionBox = (props) => {
  return (
    <View style={[styles.containerBoxStyle, props.style]}>
     {props.children}
    </View>
  );
};

const styles = {
  containerBoxStyle: {
    flex:1,
    flexDirection: 'column',
    alignItems: "center",
  }
}

export {CardSectionBox};
