import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeUsername: '',
    storeEmail: '',
    storePassword: '',
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
        }
    }

});

export const { setStoreUsername, setStoreEmail,setStorePassword } = accountSlice.actions;
export const selectUsername = (state) => state.accountManager.storeUsername;
export const selectEmail = (state) => state.accountManager.storeEmail;
export const selectPassword = (state) => state.accountManager.storePassword;

export default accountSlice.reducer;