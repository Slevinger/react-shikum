import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { activeScreenChanged } from "../../actions";

class ClickableItem extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.4)"
        onPress={this.props.onPress}
      >
        <View style={styles.containerStyle}>{this.props.children}</View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
    height: 55
  }
};

const mapStateToProps = ({ auth }) => {
  const { username, token, activeScreen } = auth;

  return { username, token, activeScreen };
};

export default connect(mapStateToProps, { activeScreenChanged })(ClickableItem);
