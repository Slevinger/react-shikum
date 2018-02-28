import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextParam = ({ label, value, onChangeText, placeholder, secureTextEntry, parameterName }) => {

  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
          <View style={{
                height:55, 
                flex:1, 
                backgroundColor:'white',
                borderColor: 'black',
                borderWidth:0.5,
                borderRadius:4,
                borderColor:'lightgrey',
                borderStyle:'dashed',
                padding:5
              }} >
                <View style={{
                  flex:1, 
                  backgroundColor:'white', 
                  borderBottomWidth:1 , 
                  borderStyle:'dashed',
                  borderColor:'lightgrey',
                  jutifyContent:'center'
                }}>
                  <Text> {placeholder} </Text>
                </View>
                <View style={{flex:1, backgroundColor:'#F9F9F9'}}>
                <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                key={parameterName}
                />
                </View>
            </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { TextParam };
