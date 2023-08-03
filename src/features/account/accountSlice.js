import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeUsername: '',
    storeEmail: '',
    storePassword: '',

    isLoggedIn: false,
    user: null,
};

const accountSlice = createSlice({

    name: 'accountManager',
    initialState,
    reducers: {

        setStoreUsername: (state, action) => {
            state.storeUsername = action.payload;
        },

        setStoreEmail: (state, action) => {
            state.storeEmail = action.payload;
        },

        setStorePassword: (state, action) => {
            state.storePassword = action.payload;
        },

        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },

        logoutSuccess: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }

});

export const { setStoreUsername, setStoreEmail,setStorePassword, loginSuccess, logoutSuccess } = accountSlice.actions;
export const selectUsername = (state) => state.accountManager.storeUsername;
export const selectEmail = (state) => state.accountManager.storeEmail;
export const selectPassword = (state) => state.accountManager.storePassword;

export default accountSlice.reducer;