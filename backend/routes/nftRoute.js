const express= require('express')
const router= express.Router();
const nftModel=require ('../models/nftModel')


//Get all nfts products, 

router.get('/getAllNfts', async(req, res)=>{
  try{
      const nfts=await nftModel.find({})
        res.send(nfts)
  }catch(error){
     res.json({message:error})
  }
})
router.post("/addnft", async (req, res) => {
  const nft = req.body.nft;
  try {
    const newNft = new nftModel({
      name: nft.name,
      image: nft.image,
      varients: ["image", "video", "gif"],
      description: nft.description,
      category: nft.category,
      prices: [nft.prices],
    });
    await newNft.save();
    res.status(201).send("New NFT Added");
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/getnftbyid", async (req, res) => {
  const nftId = req.body.nftId;
  try {
    const nft = await nftModel.findOne({ _id: nftId });
    res.send(nft);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/updatenft", async (req, res) => {
  const updatedNft = req.body.updatedNft;
  try {
    const nft = await nftModel.findOne({ _id: updatedNft._id });
      (nft.name = updatedNft.name),
      (nft.description = updatedNft.description),
      (nft.image = updatedNft.image),
      (nft.category = updatedNft.category),
      (nft.prices = [updatedNft.prices]);
    await nft.save();
    res.status(200).send("NFTs Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.post("/deletenft", async (req, res) => {
  const nftId = req.body.nftId;
  try {
    await nftModel.findOneAndDelete({ _id: nftId });
    res.status(200).send("NFTs Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports=router;