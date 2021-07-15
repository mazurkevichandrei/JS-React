import { createSlice } from "@reduxjs/toolkit";

export const userName = createSlice({
    name: 'userName',
    initialState: {
        name: 'User',
    }
    ,
    reducers: {
        setUserName: (state, {payload}) => {
            const {val} = payload
            state.name = val
          },
    }
  });

    export const { setUserName } = userName.actions;
    export default userName.reducer;