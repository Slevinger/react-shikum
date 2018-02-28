import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import MainScreen from './common/main_screen/MainScreen';
import LoginForm from './LoginForm';
import ChoosePassword from './ChoosePassword';
import PreLogin from './PreLogin';
import RegisterTherapist from './RegisterTherapist';
import { Floater } from './common';


class Main extends Component {

  renderMain() {
    if (this.props.level === '') {
      return (<PreLogin />);
    }
    if (this.props.password === '') {
      return (<ChoosePassword />);
    }
    if (this.props.token === '') {
      return (<LoginForm />);
    }
    return (<MainScreen />);
  }
  

  render() {
    //console.log(this.props)
   return (
       <View style={styles.container}>
        { this.renderMain() }
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { level, token } = auth;

  return { level, token };
};


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
};

export default connect(mapStateToProps)(Main);
