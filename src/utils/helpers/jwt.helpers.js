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

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem('accessToken');
        delete axios.defaults.headers.common.Authorization;
    }
}

export { isValidToken, setSession };
