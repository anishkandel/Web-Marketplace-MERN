import React, {useEffect} from 'react';
import { Row, Col, Container, Button, ButtonGroup,Nav } from "react-bootstrap";
import { LinkContainer, NavLink} from 'react-router-bootstrap'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import Userlist from '../components/Admin/Userlist'
import AddNewNFT from '../components/Admin/AddNewNFT'
import NftsList from '../components/Admin/Nftslist'
import OrderList from '../components/Admin/Orderlist'
import EditNFT from "../components/Admin/Editnft";


const AdminScreen=({history})=>{
  const userState=useSelector(state=> state.loginUserReducer)
  const {currentUser}=userState;
  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('currentUser')===null || !currentUser.isAdmin){
      window.location.href="/"
    }
  })
return (
    <>
      <Container>
        
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
          
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={()=>navigate("/admin/userlist" )}>All Users
              </Button>
              <Button onClick={()=>navigate('/admin/nftslist')}>
                All NFT-Arts
              </Button>
              <Button onClick={() =>navigate('/admin/addnewnft')}>
                Add New NFTs 
              </Button>
              <Button onClick={() =>navigate('/admin/orderlist')}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>  
          <Col md={10}>
            
          
            <Routes>
              <Route path="*" element={<Userlist/>} exact />
              <Route path="/admin/userlist" element={<Userlist/>} exact />
              <Route path="/admin/nftlist" element={<NftsList/>} exact />
              <Route path="/admin/addnewnft" element={<AddNewNFT/>} exact />
              <Route path="/admin/orderlist" element={<OrderList/>} exact />
              <Route path="/admin/editnft/:nftId" element={<EditNFT/>} exact />
 
            </Routes>
          
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminScreen;

