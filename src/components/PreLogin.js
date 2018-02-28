import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { loginAsPatient, loginAsTherapist, backToNoLevel, loginAsAdmin } from '../actions';
import { Card, CardSection, Button, Header } from './common';


class PreLogin extends Component {

  patientLogin() {
    this.props.loginAsPatient();
  }

  therapistLogin() {
    this.props.loginAsTherapist();
  }

  adminLogin() {
    this.props.loginAsAdmin();
  }


  renderForm() {
    return (
      <Card>
       <Header headerText='Login/Register' />
        <CardSection>
          <Button onPress={this.therapistLogin.bind(this)} >
            Therapist
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.patientLogin.bind(this)} >
            Patient
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.adminLogin.bind(this)} >
            Administrator
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
  const { username, password, error, loading, level, token } = auth;
  return { username, password, error, loading, level, token };
};

export default connect(mapStateToProps, {
  loginAsPatient,
  loginAsTherapist,
  loginAsAdmin,
  backToNoLevel
})(PreLogin);
