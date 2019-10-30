import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 80}}>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',alignContent: 'center'}}>
          <TextInput 
            placeholder= "Ketikkan disini" 
            style={{width: 200, borderColor: '#0352fc' ,borderWidth: 1, padding: 8,}}
          />
        <Button title = "Tambahkan"
        style={{borderColor: 'Black'}}
        />
        </View>
        <View />  
      </View>
  );
}
  const StyleSheet.create ({
    screen: {
      
    }
  })
