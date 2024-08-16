import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name : {type : String, require : true},
  email : {type : String, require : true},
  password : {type : String, require : true, select : false}
})

export const User = mongoose.models?.User || mongoose.model("User", schema);
