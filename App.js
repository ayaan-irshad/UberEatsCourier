import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import orders from "./assets/data/orders.json";
import { Entypo } from "@expo/vector-icons";
const order = orders[0];
export default function App() {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
