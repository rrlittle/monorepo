import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { greeting } from "ui";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>

      <Text>DSFDSDSDxxxxyyy</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});