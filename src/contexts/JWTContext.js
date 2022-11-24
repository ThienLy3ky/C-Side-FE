import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { isValidToken, setSession } from '../utils/helpers/jwt.helpers';
import { BE_SERVER } from '../config/constant';

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    LOGIN: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
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
                const accessToken = window.localStorage.getItem('accessToken');

                if (accessToken && isValidToken(accessToken)) {
                    setSession(accessToken);

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
        const response = await axios.post(`${BE_SERVER}auth/login`, {
            email,
            password,
        });
        
        const { accessToken } = response.data;

        setSession(accessToken);
        dispatch({
            type: 'LOGIN',
            payload: {},
        })
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
