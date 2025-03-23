import "./App.css";
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './components/About';
import Contact from './components/Contact';
import Disclaimer from "./components/Disclaimer";
import Loginbar from "./components/LoginBar";
import HomeScreen from './screens/HomeScreen';
import CartScreen from  './screens/CartScreen'
import RegisterScreen from  './screens/RegisterScreen'
import LoginScreen from  './screens/LoginScreen'
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import UserList from "./components/Admin/Userlist";
import AddNewNFT from './components/Admin/AddNewNFT'
import Nftslist from './components/Admin/Nftslist'
import OrderList from './components/Admin/Orderlist'
import EditNFT from "./components/Admin/Editnft";


function App() {
  return (
    
    <Router>
     <Navbar />
      <Loginbar /> 
      <Routes>
        <Route path="/admin" element={<AdminScreen/>} />
        <Route path="/orders" element={<OrderScreen/>} exact/>
        <Route path="/register" element={<RegisterScreen/>} exact/>
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/cart" element={<CartScreen/>} />
        <Route path="/about" element={<About/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/disclaimer" element={<Disclaimer/> } exact/>
        <Route path="/" element={<HomeScreen/>} exact />
        <Route path= "/admin/userlist" element={<UserList />} exact/>
        <Route path= "/admin/nftslist" element={<Nftslist />} exact/>
        <Route path= "/admin/addnewnft" element={<AddNewNFT />} exact/>
        <Route path= "/admin/orderlist" element={<OrderList />} exact/>
        <Route path="/admin/editnft/:nftId" element={<EditNFT/>} exact />  
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
