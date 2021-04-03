import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import firebase from '~/config/ConexaoFirebase';
import { NavigationActions, StackActions } from 'react-navigation';

import Background from '~/components/Background';
const imgLogo = require('~/assets/img/ImgLogo.png');

export default class Preload extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'Login',
              }),
            ],
          })
        );
      } else {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'Main',
              }),
            ],
          })
        );
      }
    });
  }


  render() {
    return (
      <Background>
        <StatusBar backgroundColor="#7BEA7C" barStyle="light-content" />
        <Image source={imgLogo} style={styles.logo} />
        <ActivityIndicator
          size="large"
          color="#7BEA7C"
          style={styles.indicador}
        />
      </Background>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: '50%',
    height: '50%',
    marginBottom: 50,
    resizeMode: 'contain',
  },
  indicador: {
    padding: 50,
  },
});
