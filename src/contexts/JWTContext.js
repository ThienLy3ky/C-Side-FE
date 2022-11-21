import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { isValidToken, setSession } from '../utils/helpers/jwt.helpers';
import { BE_SERVER } from '../config/constant';
import { LOGIN_SUCCESSFULLY } from '../config/errorMessage';

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    message: '',
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
            message: '',
        };
    },
    LOGIN: (state, action) => {
        const { user, message } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
            message,
        }
    }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
    ...initialState,
    method: 'jwt',
    login: () => Promise.resolve(),
});

AuthProvider.propTypes = {
    children: PropTypes.node
}

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const initialize = async () => {
            try {
                const access_token = window.localStorage.getItem('access_token');

                if (access_token && isValidToken(access_token)) {
                    setSession(access_token);

                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: true,
                        }
                    })
                } else {
                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        }
                    })
                }
            } catch (error) {
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    }
                })
            }
        }

        initialize()
    }, [])

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${BE_SERVER}auth/login`, {
                email,
                password,
            });
            const { access_token } = response.data;
    
            setSession(access_token);
            
            alert(LOGIN_SUCCESSFULLY)
            dispatch({
                type: 'LOGIN',
                payload: {
                    message: LOGIN_SUCCESSFULLY,
                },
            })
        } catch (error) {
            const message = error.response.data.message;

            alert(message)
            dispatch({
                type: 'LOGIN',
                payload: {
                    message
                },
            })
        }
        

    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'jwt',
                login,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };
