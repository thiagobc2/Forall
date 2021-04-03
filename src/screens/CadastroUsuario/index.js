import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Logo = require('~/assets/img/Logo.png');

export default class CadastroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobreNome: '',
      dataNascimento: '',
      sexo: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    };

    // criando as referencias de navegação entre componentes
    this.state.nome = React.createRef();
    this.state.sobreNome = React.createRef();
    this.state.dataNascimento = React.createRef();
    this.state.sexo = React.createRef();
    this.state.email = React.createRef();
    this.state.senha = React.createRef();
    this.state.confirmarSenha = React.createRef();

    // realizamos o bind para informar que amar o escopo
    this.Cadastrar = this.Cadastrar.bind(this);
  }

  Cadastrar() {
    alert('Dados Cadastrados com sucesso');
  }

  render() {
    const {
      nome,
      sobreNome,
      dataNascimento,
      sexo,
      email,
      senha,
      confirmarSenha,
    } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />

        <Image source={Logo} style={styles.logo} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerScroll}
        >
          <TextInput
            placeholder="Nome"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            value={nome}
            ref={nome}
            returnKeyType="next"
            onSubmitEditing={() => sobreNome.current.focus()}
            onChangeText={nome => {
              this.setState({ nome });
            }}
          />

          <TextInput
            placeholder="Sobrenome"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            value={sobreNome}
            ref={sobreNome}
            returnKeyType="next"
            onSubmitEditing={() => dataNascimento.current.focus()}
            onChangeText={sobreNome => {
              this.setState({ sobreNome });
            }}
          />

          <TextInput
            placeholder="Data nascimento"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            value={dataNascimento}
            ref={dataNascimento}
            returnKeyType="next"
            onSubmitEditing={() => sexo.current.focus()}
            onChangeText={dataNascimento => {
              this.setState({ dataNascimento });
            }}
          />

          <TextInput
            placeholder="Sexo"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            value={sexo}
            ref={sexo}
            returnKeyType="next"
            onSubmitEditing={() => email.current.focus()}
            onChangeText={sexo => {
              this.setState({ sexo });
            }}
          />

          <TextInput
            placeholder="e-mail"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            ref={email}
            returnKeyType="next"
            onSubmitEditing={() => senha.current.focus()}
            onChangeText={email => {
              this.setState({ email });
            }}
          />

          <TextInput
            placeholder="senha"
            style={styles.input}
            placeholderTextColor="#999"
            secureTextEntry={true}
            value={senha}
            ref={senha}
            returnKeyType="next"
            onSubmitEditing={() => confirmarSenha.current.focus()}
            onChangeText={senha => {
              this.setState({ senha });
            }}
          />

          <TextInput
            placeholder="Confirmar senha"
            style={styles.input}
            placeholderTextColor="#999"
            secureTextEntry={true}
            value={confirmarSenha}
            ref={confirmarSenha}
            returnKeyType="send"
            onChangeText={senha => {
              this.setState({ senha });
            }}
          />

          {/* Btn: Criar Novo usuário */}
          <TouchableOpacity style={styles.btn} onPress={this.Cadastrar}>
            <Text style={styles.txtBtn}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 10,
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  containerScroll: {
    // flex: 1,
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
});
