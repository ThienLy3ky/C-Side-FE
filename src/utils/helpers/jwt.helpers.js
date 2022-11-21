import axios from "axios";
import jwtDecode from "jwt-decode";

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false;
    }

    const decoded = jwtDecode(accessToken);
    const currTime = Date.now() / 1000;

    return decoded.exp > currTime;
}

const setSession = (access_token) => {
    if (access_token) {
        localStorage.setItem('access_token', access_token);
        axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
        localStorage.removeItem('access_token');
        delete axios.defaults.headers.common.Authorization;
    }
}

export { isValidToken, setSession };
