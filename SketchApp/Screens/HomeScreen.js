import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Button
        title="Drawing 열기"
        onPress={() => navigation.navigate('Drawing')}
      />
      <Button title="Text 열기" onPress={() => navigation.navigate('Text')} />
    </View>
  );
}

export default HomeScreen;
