import React, { Component } from "react";
import { connect } from "react-redux";
import { ListView } from "react-native";
import User from "./User";
import RegisterTherapist from "./RegisterTherapist";
import RegisterPatient from "./RegisterPatient";
import { getUsers } from "../actions";
import { Card, CardSection, Button, Floater } from "./common";

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.showAddUserDialog = this.showAddUserDialog.bind(this);
    this.hideAddUserDialog = this.hideAddUserDialog.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.renderRow = this.renderRow.bind(this);

    this.state = { shouldShowAddUser: false };
  }

  componentWillMount() {
    this.props.getUsers(this.props.app.activeScreen);
    //  this.data = ds.cloneWithRows(this.props.libraries);
  }

  onAddUserClicked() {
    const { getUsers, app } = this.props;

    getUsers(app.activeScreen);
  }

  selectUser(user) {
    console.log(user);
  }

  showAddUserDialog() {
    this.setState({ shouldShowAddUser: true });
  }

  hideAddUserDialog() {
    this.props.getUsers(this.props.app.activeScreen);
    this.setState({ shouldShowAddUser: false });
  }

  renderRow(user) {
    return <User user={user} selectUser={this.selectUser} />;
  }

  renderMain() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.data);

    return (
      <Card>
        <ListView
          dataSource={this.dataSource}
          //dataSource={this.data}
          renderRow={this.renderRow}
        />
        <CardSection>
          <Button onPress={this.showAddUserDialog}>Add</Button>
        </CardSection>
      </Card>
    );
  }

  renderRegisterUser() {
    const { activeScreen } = this.props.app;
    switch (activeScreen) {
      case "Therapists":
        return <RegisterTherapist hideAddUserDialog={this.hideAddUserDialog} />;
      case "Patients":
        return <RegisterPatient hideAddUserDialog={this.hideAddUserDialog} />;
    }
  }

  render() {
    if (this.state.shouldShowAddUser) {
      return (
        <Floater hideAddUserDialog={this.hideAddUserDialog}>
          {this.renderRegisterUser()}
        </Floater>
      );
    }
    return this.renderMain();
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { ...state, data: state.app.data };
};

export default connect(mapStateToProps, { getUsers })(UsersList);
