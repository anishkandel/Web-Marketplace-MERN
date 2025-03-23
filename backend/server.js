const express = require ('express') 
const connectDB=require('./config/config')
const dotenv= require('dotenv')
const morgan =require ('morgan')
require('colors')


//config .env
dotenv.config()


//mongodb conn
connectDB()


const app =express()

//middlewares

app.use(express.json())
app.use(morgan('dev'))

//route
app.use('/api/nfts', require('./routes/nftRoute'));
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/orders', require('./routes/orderRoute'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
app.get('/',(req, res)=>{
  res.send('<h1> Hello from Node Server </h1>');
});
}

const port=process.env.PORT  
app.listen(5000, () =>{
  console.log('');
})