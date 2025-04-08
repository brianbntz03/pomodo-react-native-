import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Timer({time}) {
    const formatTime = `${Math.floor(time /60)
    .toString()
    .padStart(2,"0")}:${(time % 60).toString().padStart(2,"0")} `;
  return (
    <View style={styles.Container}>
      <Text style={styles.time}>{formatTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex: 0.3,
        justifyContent: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
    },
    time:{
        fontSize: 90,
        fontWeight: "900",
        textAlign: "center",
        color: "#f6f32s",
    }
})