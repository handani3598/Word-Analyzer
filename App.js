import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      word : "",
      vowel: 0,
      consonant: 0,
      number: 0 
    }
  }

analyzeWord = () => {

  var str =  this.state.word;
  var array = str.split(); 

  let countVowel = () => {
    for (let char of array.toLowerCase()) {
      if(array[i] == 'a' || 
         array[i] == 'e' ||
         array[i] == 'i' ||
         array[i] == 'o' ||
         array[i] == 'u' ) {
           this.setState({vowel : this.state.vowel+1});
         }
      else this.setState({consonant : this.state.consonant+1});
    }

  this.setState({number: this.state.word.length});
  }





}

render () {
  return (
    <View style = {styles.container}>
      <View style = {styles.container}>
      <Text>Word Analyzer</Text>
      <TextInput onChangeText={(word) => this.setState({word})} placeholder='Insert Text'/>
      </View>

      <View style={styles.container}>
      <Button onPress={this.analyzeWord} title='Analyze'/>
      <Text></Text>
      <Text>Word :  {this.state.word}</Text>
      <Text>No of Consonants :  {this.state.vowel}</Text>
      <Text>No of Vowels :  {this.state.consonant}</Text>
      <Text>No of Characters :  {this.state.number}</Text>
     </View>
    </View>
  );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
