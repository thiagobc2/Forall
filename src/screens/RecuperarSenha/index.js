import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const Logo = require('~/assets/img/Logo.png');

export default class RecuperarSenha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.Enviar = this.Enviar.bind(this);
  }

  Enviar() {
    Alert.alert(
      'Recuperação de senha',
      `Enviado procedimento para o e-mail:
      "${this.state.email}"`
    );
  }

  render() {
    const { email } = this.state;

    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />

        <Text style={styles.Txt}>Informe o e-mail e clique em no botão</Text>
        <Text style={[styles.Txt, styles.TxtDestaque]}>Redefinir a senha</Text>

        <TextInput
          placeholder="Digite sem e-mail"
          style={styles.input}
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          returnKeyType="send"
          onSubmitEditing={() => this.recuperarSenha}
          onChangeText={email => {
            this.setState({ email });
          }}
        />

        {/* btn: Redefinir a senha */}
        <TouchableOpacity style={styles.btn} onPress={() => this.Enviar()}>
          <Text style={styles.txtBtn}>Redefinir senha</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 50,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
  },
  input: {
    textAlign: 'center',
    borderRadius: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    fontSize: 20,
    height: null,
    width: '95%',
  },
  btn: {
    width: '95%',
    height: 50,
    borderRadius: 20,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
    backgroundColor: '#37752C',
  },
  txtBtn: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  Txt: {
    fontSize: 20,
  },
  TxtDestaque: {
    fontWeight: 'bold',
  },
});
