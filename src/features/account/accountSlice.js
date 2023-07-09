import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeUsername: '',
    storePassword: '',
};

const accountSlice = createSlice({


    name: 'accountManager',
    initialState,
    reducers: {

        setStoreUsername: (state, action) => {
            state.storeUsername = action.payload;
        },
        setStorePassword: (state, action) => {
            state.storePassword = action.payload;
        }
    }

});

export const { setStoreUsername, setStorePassword } = accountSlice.actions;
export const selectUsername = (state) => state.accountManager.storeUsername;
export const selectPassword = (state) => state.accountManager.storePassword;

export default accountSlice.reducer;