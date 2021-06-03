import axios from "axios";

//PROD
//const server = 'https://agustirri.com/api/';
//TEST
const server = "http://localhost:8015/api/";

export const signIn = async (email: String, password: String) => {
	try {
		const response = await axios.post(server + "login.php", {
			email: email,
			pwd: password
		});
		if (response.data === 0) {
			return 0;
		} else {
			return response.data;
		}
	} catch (e) {
		return `😱 Request failed: ${e}`;
	}
};

export const checkUser = async (username: String) => {
	try {
		const response = await axios.post(server + "checkUser.php", {
			username: username
		});
		if (response.data === 0) {
			return 0;
		} else {
			return response.data;
		}
	} catch (e) {
		return `😱 Request failed: ${e}`;
	}
};

export const insertUser = async (
	username: string,
	mail: string,
	pwd: string
) => {
	try {
		const response = await axios.post(server + "insertUser.php", {
			username: username,
			email: mail,
			pwd: pwd
		});
		if (response.data === 0) {
			return 0;
		} else {
			return response.data;
		}
	} catch (e) {
		return `😱 Request failed: ${e}`;
	}
};

export const getUserInfo = async (username: string) => {
	try {
		const response = await axios.post(server + "getUserInfo.php", {
			username: username
		});
		if (response.data === 0) {
			return 0;
		} else {
			return response.data;
		}
	} catch (e) {
		return `😱 Request failed: ${e}`;
	}
};
