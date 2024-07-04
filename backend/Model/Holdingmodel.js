const {model}=require("mongoose");
const{HoldingSchema}=require("../Schema/HoldingSchema");
const Holdingmodel=new model("holding",HoldingSchema);
module.exports={Holdingmodel};