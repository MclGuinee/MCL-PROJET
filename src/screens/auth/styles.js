import {
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		
	},

	errorText: {
		color: "red",
		// width: (windowWidth - 45),
		marginTop: 20,
	},

	forgotPasswordAnchor: {
		//justifyContent: flex - end,
		color: "green"
	},

	newAccountAnchor: {
		flexDirection: "row",
		justifyContent: "center"
	},

	loginBtn: {
		color:"green",
		flexDirection: "row",
		justifyContent: "center"
	},

	
	accountTab: {
		color: "grey",
		marginTop: 0,
		paddingTop: 0
	},

	accountTabs: {
		paddingBottom: 0,
	}

});