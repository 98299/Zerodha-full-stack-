const {model}=require("mongoose")
const{UserSchema}=require("../Schema/UserSchema");
const UserModel= new model("user",UserSchema);
module.exports={UserModel}