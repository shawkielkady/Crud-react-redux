import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name: "auth",
    initialState:{userId:null , logedin:true},
    reducers:{}
})
export default authSlice.reducer;