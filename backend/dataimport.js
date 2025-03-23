const mogoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDb = require("./config/config");
const Nft = require("./models/nftModel");
const Nfts = require("./data/nft-data");

//config dot env and mongodb conn file
dotenv.config();
connectDb();

//import data
const importData = async () => {
  try {
    await Nft.deleteMany();
    const sampleData = Nfts.map((nft) => {
      return { ...nft };
    });
    await Nft.insertMany(sampleData);
    console.log("Data Imported".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
