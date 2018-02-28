import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import UserAvatar from 'react-native-user-avatar';
import Button from './Button';
import { logOutUser, activeScreenChanged } from '../../../actions';
import { Card, Floater } from '../';
import ClickableItem from '../ClickableItem';
import RegisterTherapist from '../../RegisterTherapist';

class ControlPanel extends Component {
  changeScreen(newScreen) {
    //if (this.props.app.activeScreen !== newScreen) {
      this.props.activeScreenChanged(newScreen);
    //}
    this.props.closeDrawer();
  }

  render() {
    return (
      <View
       style={{
       flex: 1,
       backgroundColor: '#E8FCFF',
       flexDirection: 'column'
      }}>
         <View
         style={{
           flexDirection: 'column',
           justifyContent: 'center',
           alignContent: 'center',
           height: 200,
         }} >
           <View
             style={{
                 height: 170,
                 backgroundColor: '#E8FCFF',
                 alignSelf: 'center',
                 justifyContent: 'center'
             }} >
            <UserAvatar size="100" name="Anna Aaronov" />
           </View >
           <View
             style={{
               backgroundColor: 'powderblue',
               justifyContent: 'flex-end',
               height: 30
             }}>
             <Text style={{ fontSize: 18, alignSelf: 'center' }}> Anna Aaronov </Text>
           </View >
       </View>

    <ScrollView style={{
         height:100,
         flex:1,
         backgroundColor: '#E8FCFF'
       }} >
          <Card>
              <ClickableItem
                  onPress={() => {
                    this.changeScreen('Therapists')
                  }} >
                 <Text style={{ fontSize: 18, alignSelf: 'center' }}> Therapists </Text>
              </ClickableItem>
              <ClickableItem
                  onPress={() => {
                  this.changeScreen('Patients')
                  }} >
                 <Text style={{ fontSize: 18, alignSelf: 'center' }}> Patients </Text>
              </ClickableItem>
          </Card>
    </ScrollView>
    <Button onPress={this.props.logOutUser} text="Logout" />
  </View>
          );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { logOutUser, activeScreenChanged })(ControlPanel);
