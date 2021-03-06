import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { passwordChanged, usernameChanged, loginUser, backToNoLevel, registerUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


class LoginForm extends Component {
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { username, password, level } = this.props;

    this.props.loginUser({ username, password, level });
  }

  removeLevel() {
    this.props.backToNoLevel();
  }

  renderError() {
    //if (this.props.error !== '') {
      return (
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      );
    //}
  }

  renderButton() {
    console.log(this.props.loading);

    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)} >
        Login
      </Button>
    );
  }

  renderForm() {
    return (
      <Card>
       <Header headerText={`Login-${this.props.level}`} />
        <CardSection>
          <Input
            label="Username"
            placeholder="Username"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <CardSection>
          <Button onPress={this.removeLevel.bind(this)}>
            back
          </Button>
        </CardSection>
      </Card>
    );
  }

  render() {
    return (
    <View style={styles.container}>
      { this.renderForm() }

    </View>
  );
  }

}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


const mapStateToProps = ({ auth }) => {
  const { username, password, error, loading, token, level } = auth;
  return { username, password, error, loading, token, level };
};

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  loginUser,
  backToNoLevel
})(LoginForm);
