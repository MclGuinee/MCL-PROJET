import {
	StyleSheet
} from 'react-native';
import * as theme from "../../styles/theme";

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		backgroundColor: theme.color.white,
		
	},

	errorText: {
		color: theme.color.red,
		// width: (windowWidth - 45),
		marginTop: 20,
	},

	forgotPasswordAnchor: {
		//justifyContent: flex - end,
		color: theme.color.green
	},

	newAccountAnchor: {
		//justifyContent: center,
		color: theme.color.green
	},

	loginBtn: {
		marginTop: 45,
		color: theme.color.green
	},

	
	accountTab: {
		color: theme.color.grey,
		marginTop: 0,
		paddingTop: 0
	},

	accountTabs: {
		paddingBottom: 0,
	}

});