import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
};


export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload); // Push the new user to the array
          },
    },
  })
  
  export const { addUser } = UserSlice.actions;
  export const selectUsers = (state) => state.user.users;
  
  export default UserSlice.reducer;

  