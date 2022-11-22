import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import orders from "./assets/data/orders.json";
import { Entypo } from "@expo/vector-icons";
const order = orders[0];
export default function App() {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					borderColor: "#3FC060",
					borderWidth: 2,
					borderRadius: 10,
				}}
			>
				<Image
					source={{ uri: order.Restaurant.image }}
					style={{ width: 50, height: 50 }}
				/>
				<View style={{ marginLeft: 10 }}>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>
						{order.Restaurant.name}
					</Text>
					<Text style={{ color: "grey" }}>{order.Restaurant.address}</Text>
					<Text style={{ marginTop: 10 }}>Delivery Details:</Text>
					<Text style={{ color: "grey" }}>{order.User.name}</Text>
					<Text style={{ color: "grey" }}>{order.User.address}</Text>
				</View>

				<Entypo name="check" size={30} color="black" />
			</View>
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
