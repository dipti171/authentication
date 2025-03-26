import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  phone_number:{
    type: Number,
    default: null
  },
  email_address: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
  },
  company_name: {
    type: String,
    default: null
    
  },
  isAgency: {
    type: Boolean,
    required: true,
    default: false, 
  },
  avatar: {
    type: String,
    default: '',
  },
  status:{
    type:String,
    enum:["Active","Inactive","Suspended"],
    default:"Active"
  },
  role:{
    type:String,
    enum:["ADMIN","USER"],
    default:"USER"
},

  
},{
    timestamps:true
})

const UserModel=mongoose.model("User",userSchema)

export default UserModel