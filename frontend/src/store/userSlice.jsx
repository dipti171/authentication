import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    _id : "",
    full_name: "",
    phone_number: "",
    email_address : "",
    company_name : "",
    isAgency : "",
    role : "",
}

const userSlice  = createSlice({
    name : 'user',
    initialState : initialValue,
    reducers : {
        setUserDetails : (state,action) =>{
             state._id = action.payload?._id
             state.full_name  = action.payload?.full_name
             state.phone_number = action.payload?.phone_number
             state.email_address = action.payload?.email_address
             state.company_name = action.payload?.company_name
             state.isAgency = action.payload?.isAgency
            state.role = action.payload?.role
        },
        logout : (state,action)=>{
            state._id = ""
            state. full_name = ""
            state. phone_number= ""
            state. email_address= ""
            state.company_name = ""
            state.isAgency = ""
            state.role = ""
        },
    }
})

export const { setUserDetails,logout} = userSlice.actions

export default userSlice.reducer