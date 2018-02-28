import React, { Component } from "react";
import { Text, TouchableHighlight, View, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
// import * as actions from '../actions';

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.user.username}</Text>
        </CardSection>
      );
    }
  }

  pressed() {
    this.props.selectUser(this.props.user.username);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.pressed.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{this.props.user.username}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = false; //state.selectedUser=== ownProps.user.id;
  return { expanded };
};

export default connect(mapStateToProps, {})(User);
