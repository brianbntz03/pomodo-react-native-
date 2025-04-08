import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const options = ["pomodoro", "breve descanso", "descanso largo"]

export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={{ flexDirection: 'row'}}>
      {options.map((item, index) => (
        <TouchableOpacity 
        key={index}
        onPress={() => handlePress(index)} 
        style={[styles.itemStyle, currentTime !== index && {borderColor: 'white'}]}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: 132,
    fontWeight: 'normal',
    textAlign: "center",
    borderWidth: 1,
    padding: 8,
    borderColor: 'black',
    marginVertical: 20,
  }
})