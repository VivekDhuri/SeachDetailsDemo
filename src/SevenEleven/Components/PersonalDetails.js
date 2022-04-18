import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const PersonalDetails = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const onChangeName = text => {
    setName(text);
  };

  const onChangeAge = ageText => {
    if (!isNaN(ageText)) {
      setAge(ageText);
    }
  };

  const validateDetails = () => {
    if (name.length !== 0 && age > 0) {
      props.addName({name, age});
    }
  };

  const resetDetails = () => {
    setAge(0);
    setName('');
  };

  const nameContainer = () => {
    return (
      <View style={styles.inputContainer}>
        <Text style={{color: 'white', width: 40}}>Name</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor={'#383838'}
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
      </View>
    );
  };

  const ageContainer = () => {
    return (
      <View style={styles.inputContainer}>
        <Text style={{color: 'white', width: 40}}>Age</Text>
        <TextInput
          placeholder="Age"
          placeholderTextColor={'#383838'}
          style={styles.input}
          onChangeText={onChangeAge}
          value={age.toString()}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        height: 150,
        width: Dimensions.get('screen').width,
        borderRadius: 10,
      }}>
      {nameContainer()}
      {ageContainer()}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionView} onPress={validateDetails}>
          <Text style={{color: 'white'}}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionView} onPress={resetDetails}>
          <Text style={{color: 'white'}}>RESET</Text>
        </TouchableOpacity>
        <Text />
      </View>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: Dimensions.get('screen').width - 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  inputContainer: {
    flex: 1 / 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#066163',
  },
  actionContainer: {
    flex: 1 / 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#066163',
  },
  actionView: {
    backgroundColor: '#CDBE78',
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 4,
  },
});
