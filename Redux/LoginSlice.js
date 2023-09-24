import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    userId : null ,
}

export const LoginSlice = createSlice({
    name :"login",
    initialState,
    reducers:{
        
        setUserId : (state,action)=>{
            state.userId = action.payload;
        }
        
    }

});

export const {setUserId} = LoginSlice.actions;

// selectors - to gfet data from the store-> navSlice 
// this would give the current value 
export const SelectUserId = (state)=> state.login.userId;

export default LoginSlice.reducer;

