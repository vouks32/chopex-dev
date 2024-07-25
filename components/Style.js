import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get('screen').width;
let screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
	viewport: {
		flex: 1,
	},
	defaultScollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 30,
		paddingBottom: 188,
	},
	primaryButton: {
		alignItems: 'center',
		backgroundColor: '#7AEC67',
		borderRadius: 10,
		paddingVertical: 21,
		marginHorizontal: 37,
	},
	primaryButtonText: {
		color: '#07450D',
		fontSize: 24,
		fontWeight: 'bold',
	},
	secondaryButton: {
		alignItems: "center",
		backgroundColor: "#D0D0D0",
		borderRadius: 10,
		paddingVertical: 20,
		marginBottom: 20,
		marginHorizontal: 34,
	},
	secondaryButtonText: {
		color: "#1E1E1E",
		fontSize: 20,
		fontWeight: "bold",
	},
	tertiaryButton: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 19,
		paddingHorizontal: 77,
		marginHorizontal: 33,
	},
	tertiaryButtonText: {
		color: "#07450D",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 6,
		textAlign: "center"
	  },
	textInput: {
		height: 50,
		backgroundColor: "#7AEC6733",
		borderColor: "#07450D",
		borderRadius: 10,
		borderWidth: 1,
		marginBottom: 13,
		marginHorizontal: 14,
		paddingHorizontal: 10,
	}
});
export { styles, screenHeight, screenWidth }