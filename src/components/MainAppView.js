import React, { Component } from 'react';
import { View } from 'react-native';
import MainScreen from './common/main_screen/MainScreen';

export default class MainAppView extends Component {
  render() {
       return (
          <MainScreen />
        );
  }
}


// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import { logOutUser } from '../actions';
// import { Card, CardSection, Button, AppHeader } from './common';
// import MyDrawer from './common/drawer/MyDrawer';
//
// class MainAppView extends Component {
//   onButtonPress() {
//     this.props.logOutUser();
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <MyDrawer openDrawer={this.openDrawer.bind(this) >
//             <Card>
//               <CardSection>
//                 <Button onPress={this.onButtonPress.bind(this)} >
//                   Logout
//                 </Button>
//               </CardSection>
//           </Card>
//         </MyDrawer>
//
//       </View>
//     );
//   }
// }
//
// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#F5FCFF',
//     borderWidth: 1,
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//   },
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   }
// };
//
//
// const mapStateToProps = ({ auth }) => {
//   const { username, token } = auth;
//
//   return { username, token };
// };
//
// export default connect(mapStateToProps, { logOutUser })(MainAppView);
