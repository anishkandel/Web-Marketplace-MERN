const mongoose =require('mongoose')

const nftSchema=mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  varients:[],
  prices:[],
  category:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
},{timestamps:true}
);

const nftModel=mongoose.model('nft', nftSchema);
module.exports=nftModel;