import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get('screen').width;
let screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor : '#FFFFFF'
	},
	defaultScollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 25,
		paddingBottom: 30,
	},
	errorBox:{
		textAlign: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	primaryButton: {
		alignItems: 'center',
		backgroundColor: '#7AEC67',
		borderRadius: 10,
		paddingVertical: 21,
		marginHorizontal: 37,
		alignContent: 'center'
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
	backButton : { 
		alignItems: "center", 
		width: 35, 
		flex : 1,
		backgroundColor: "#D2D2D2", 
		borderRadius: 50, 
		aspectRatio: 1, 
		flexDirection: 'row', 
		justifyContent: 'center',
		zIndex: 80,
		position: 'absolute',
		top: 10,
		left : 20
	},
	backButtonIcon: { 
		color: "#000000", 
		fontSize: 20, 
		fontWeight: "bold", 
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
	},
	searchContainer: {
		backgroundColor: "#D9D9D9",
		borderRadius: 20,
		paddingHorizontal: 10,
		marginHorizontal: 20,
		marginBottom: 24,
		flexDirection: 'row',
		flexWrap: 'nowrap'
	},
	searchContainerInput: {
		width: '90%',
		marginVertical: 2,
		marginHorizontal: 10
	},
	searchIcon: {
		width: 23,
		height: 30,
		marginVertical: 5,
	  },
	  eventContainer: {
		borderColor: "#00000015",
		borderWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 19,
		marginBottom: 10,
		width: screenWidth
	  },
	  eventContainerImage: {
		borderRadius: 20,
		height: 170,
		marginBottom: 10,
	  },
	  eventContainerTitle : { color: "#000000", fontSize: 16, fontWeight: "bold", },
	  eventContainerSubTitle : { color: "#00000090", fontSize: 12, fontWeight: "bold", },
	  eventContainerPriceTag: { alignItems: "center", backgroundColor: "#D2D2D2", padding: 10, borderRadius: 50 },
	  eventContainerPriceText: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
	  }
});
export { styles, screenHeight, screenWidth }