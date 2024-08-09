import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get('screen').width;
let screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	defaultScollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 25,
		paddingBottom: 30,
	},
	errorBox: {
		textAlign: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	primaryButton: {
		alignItems: 'center',
		backgroundColor: '#7AEC67',
		borderRadius: 10,
		paddingVertical: 15,
		marginHorizontal: 40,
		alignContent: 'center'
	},
	primaryButtonText: {
		color: '#07450D',
		fontSize: 20,
		fontWeight: 'bold',
	},
	primaryButtonDark: {
		alignItems: 'center',
		backgroundColor: '#07450D',
		borderRadius: 10,
		paddingVertical: 15,
		marginHorizontal: 40,
		alignContent: 'center'
	},
	primaryButtonDarkText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	secondaryButton: {
		alignItems: "center",
		backgroundColor: "#D0D0D0",
		borderRadius: 10,
		paddingVertical: 15,
		marginHorizontal: 40,
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
	backButton: {
		alignItems: "center",
		width: 35,
		backgroundColor: "#FFF",
		borderRadius: 50,
		aspectRatio: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		elevation: 10,
		marginHorizontal: 5,
		marginVertical: 5,
		padding: 5 
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
		paddingVertical: 10,
		marginLeft: 20,
		marginRight: 5,
		marginBottom: 10,
		width: screenWidth - (screenWidth * 0.15)
	},
	eventContainerImage: {
		borderRadius: 20,
		height: 170,
		marginBottom: 10,
	},
	eventContainerTitle: { color: "#000000", fontSize: 16, fontWeight: "bold", },
	eventContainerSubTitle: { color: "#00000090", fontSize: 12, fontWeight: "bold", },
	eventContainerPriceTag: { alignItems: "center", backgroundColor: "#7AEC67", padding: 10, borderRadius: 50 },
	eventContainerPriceText: {
		color: "#000000",
		fontSize: 13,
		fontWeight: "bold",
	},
	sectionTitleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		marginHorizontal: 20,
		paddingVertical: 5,
		borderTopWidth: 1,
		borderColor: '#00000040'
	},
	sectionTitleHeading: {
		color: "#000000",
		fontSize: 20,
		fontWeight: "bold",
	},
	sectionTitleBubbleText: {
		color: "#000000",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 1,
	},
	sectionTitleSubHeading: {
		color: "#00000050",
		fontSize: 13,
		fontWeight: "bold",
	},
	sectionTitleBubble: {
		alignItems: "center",
		backgroundColor: "#D9D9D9",
		borderRadius: 20,
		paddingVertical: 5,
		paddingHorizontal: 10
	},
	dishOptionWrapper: {
		flexDirection: "row",
		marginBottom: 10,
		marginHorizontal: 25,
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderColor: '#00000010',
		paddingVertical: 5
	  },
	dishOptionImage: {
		borderRadius: 10,
		flex: 1,
		aspectRatio: 1,
		marginRight: 13,
	  },
	dishOptionTitle: {
		color: "#000000",
		fontSize: 16,
		fontWeight: "bold",
	  },
	dishOptionSubTitle: {
		color: "#00000088",
		fontSize: 14,
		fontWeight: "bold",
		marginTop: 5,
	  },
	  dishOptionPrice: {
		color: "#07450D",
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 5,
	  }
});
export { styles, screenHeight, screenWidth }