import { Platform, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Header from "@/Componts/Header";
import Timer from "@/Componts/Timer";

const colors = ["#0ABAB5", "#bb4a50", "#4682B4"];

export default function Index() {

  const [isWorking, setisWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "BREAK" | "RESET");
  const [active,setActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (active) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000);
    }else {
      clearInterval(interval);
    }

    if (time === 0) {
      setActive(false);
      setisWorking(prev => !prev);
      setTime( isWorking ? 300 : 1500 );
    }

    return() => clearInterval(interval)
  }, [active, time])

  function handlestartStop() {
    setActive(!active);
  }


  return (
    <SafeAreaView 
    style={[Styles.container, {backgroundColor: colors [currentTime]}]}
    >
      <View style={{
        flex: 2,
        paddingHorizontal:10,  paddingTop: Platform.OS === "android" && 30, 
        borderWidth: 3,
       }}>
        <Text style={Styles.text}>pomodoro</Text>
        <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime} 
        setTime={setTime} />
        <Timer time={time}/>
        <TouchableOpacity  onPress={handlestartStop} style={Styles.button}>
          <Text style={{color: "white",fontWeight: "normal"}}>
            {active ? "Stop" : "Start"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  button:{
      alignItems:"center",
      backgroundColor: "brown",
      padding: 10,
      borderRadius: 25,
      marginTop: 20,
  }
});