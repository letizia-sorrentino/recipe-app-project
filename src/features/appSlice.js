import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screenMode: 0,
}

const appSlice = createSlice({


    name: "appManager",
    initialState,

    reducers: {
        setScreenMode: (state, action) => {
            state.screenMode = action.payload;
        }
    }




});

export const { setScreenMode } = appSlice.actions;
export const selectScreenMode = (state) => state.app.screenMode;

export default appSlice;