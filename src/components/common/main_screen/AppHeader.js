import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { menu } from '../../../images/menu';

const AppHeader = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>

      <TouchableWithoutFeedback onPress={props.onPress} activeOpacity={0}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
          <Image
            style={{ width: 66, height: 58 }}
            source={{ uri: menu }}
            />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 60,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    alignItems: 'center'

  },
  textStyle: {
    fontSize: 20
  }
};

export default AppHeader;
