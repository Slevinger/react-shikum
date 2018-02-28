import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { createUser } from "../actions";

class RegisterPatient extends Component {
  constructor(props) {
    super(props);
    this.params = {
      username: "",
      first_name: "",
      last_name: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  registerButtonPressed() {
    const { username, first_name, last_name } = this.params;
    const activeScreen = this.props.activeScreen;
    this.props.createUser({
      username,
      first_name,
      last_name,
      activeScreen
    });
    this.props.hideAddUserDialog();
  }

  onValueChange(text, key) {
    this.params[key] = text;
    console.log(this.params);
  }

  renderError() {
    //if (this.props.error !== '') {
    return (
      <CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
      </CardSection>
    );
    //}
  }
  //this.onValueChange.bind(this)
  renderMain() {
    if (!this.props.loading) {
      return (
        <Card>
          <CardSection>
            <Input
              label="Username"
              placeholder="Username"
              onChangeText={text => this.onValueChange(text, "username")}
              key="username"
              value={this.props.username}
            />
          </CardSection>
          <CardSection>
            <Input
              label="First Name"
              placeholder="First Name"
              onChangeText={text => this.onValueChange(text, "first_name")}
              key="first-name"
              value={this.props.username}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Last Name"
              placeholder="Last Name"
              onChangeText={text => this.onValueChange(text, "last_name")}
              key="last-name"
              value={this.props.username}
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
            <Button onPress={this.registerButtonPressed.bind(this)}>
              Create New
            </Button>
          </CardSection>
        </Card>
      );
    }
    return <Spinner />;
  }

  render() {
    //console.log(this.props)
    return <View style={styles.container}>{this.renderMain()}</View>;
  }
}

const mapStateToProps = ({ auth, app }) => {
  const { level, token, error, loading } = auth;
  const { activeScreen } = app;

  return { level, token, activeScreen, error, loading };
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default connect(mapStateToProps, { createUser })(RegisterPatient);
