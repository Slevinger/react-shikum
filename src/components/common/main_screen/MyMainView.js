import React, { Component } from "react";
import { ScrollView, StyleSheet, Platform, Text } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import AppHeader from "./AppHeader";
import UsersList from "../../UsersList";
import { Card, CardSection } from "../";
import { getUsers } from "../../../actions";

class MyMainView extends Component {
  constructor(props) {
    super(props);
  }

  setParentState(args) {
    this.props.setParentState(args);
  }

  renderMainScreen() {
    const { activeScreen } = this.props.app;

    switch (activeScreen) {
      case "Therapists":
      case "Patients":
        return <UsersList key={activeScreen} />;

      default:
        return <Text> Scheduale </Text>;
    }
  }

  render() {
    const { openDrawer } = this.props;

    return (
      <ScrollView
        pointerEvents="box-none"
        style={styles.scrollView}
        scrollEventThrottle={200}
        contentInset={{ top: 0 }}
      >
        <AppHeader onPress={openDrawer} headerText="app" />
        <Card>
          <CardSection>{this.renderMainScreen()}</CardSection>
        </Card>
      </ScrollView>
    );
  }
}

// Shadow props are not supported in React-Native Android apps.
// The below part handles this issue.

// iOS Styles
const iosStyles = StyleSheet.create({
  track: {
    height: 2,
    borderRadius: 1
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.75
  }
});

const iosMinTrTintColor = "#1073ff";
const iosMaxTrTintColor = "#b7b7b7";
const iosThumbTintColor = "#343434";

// Android styles
const androidStyles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: "center"
  },
  track: {
    height: 4,
    borderRadius: 4 / 2
  },
  thumb: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 20 / 2
  },
  touchArea: {
    position: "absolute",
    backgroundColor: "transparent",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  debugThumbTouchArea: {
    position: "absolute",
    backgroundColor: "green",
    opacity: 0.5
  }
});

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getUsers })(MyMainView);

const androidMinTrTintColor = "#26A69A";
const androidMaxTrTintColor = "#d3d3d3";
const androidThumbTintColor = "#009688";

const sliderStyles = Platform.OS === "ios" ? iosStyles : androidStyles;
const minimumTrackTintColor =
  Platform.OS === "ios" ? iosMinTrTintColor : androidMinTrTintColor;
const maximumTrackTintColor =
  Platform.OS === "ios" ? iosMaxTrTintColor : androidMaxTrTintColor;
const thumbTintColor =
  Platform.OS === "ios" ? iosThumbTintColor : androidThumbTintColor;
