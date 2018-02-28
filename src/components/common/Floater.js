import { View } from "react-native";
import React, { Component } from "react";
import { Button } from "./Button";

const Floater = props => {
  const { containerStyle } = styles;
  return (
    // Try setting `flexDirection` to `column`.
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0)" }} />
      <View
        style={{
          flex: 15,
          backgroundColor: "rgba(0,0,0,0)",
          justifyContent: "center"
        }}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0)" }} />
        <View style={{ flex: 8, backgroundColor: "white" }}>
          {props.children}
          <Button onPress={props.hideAddUserDialog}>Back</Button>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0)" }} />
      </View>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0)" }} />
    </View>
  );
};

const styles = {
  containerStyle: {
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    // justifyContent: 'center',
    flex: 8
  }
};

export { Floater };
