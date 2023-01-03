import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text, Alert, Button} from 'react-native';

export default class TextScreen extends Component {
  state = {
    text: '',
    inputText: '',
  };

  submitBtn = () => {
    this.setState({text: this.state.inputText});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>일기</Text>
        <View style={styles.bodyContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => {
              this.setState({inputText: text});
            }}
            placeholder="일기를 작성해주세요."
          />
          <Button title="작성완료" onPress={this.submitBtn} />
          <Text style={styles.showText}>{this.state.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',

    paddingHorizontal: 30,
    flex: 1,
  },
  headerText: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 30,
  },
  bodyContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    marginVertical: 30,
    flex: 1,
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  showText: {
    marginTop: 10,
    fontSize: 25,
  },
});
