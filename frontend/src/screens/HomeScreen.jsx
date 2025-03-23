import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {getAllNfts} from '../actions/nftAction'
import Nft from '../components/Nft'
import Loader from "../components/Loader"
import Error from "../components/Error"
import Filters from "../components/Filters"
import Carousel from '../components/Carousel'

const Homescreen = () => {
  const dispatch= useDispatch()
  const nftstate=useSelector((state) => state.getAllNftReducer)
  const {loading, nfts, error}=nftstate;
  useEffect(()=>{dispatch(getAllNfts())},[dispatch]);

  return (
    <>
      <Container>
      <Carousel/>
        {loading ?(<Loader />)
               :error ? (
               <Error> Error in fetching nfts {error} </Error>
               )
               : (<Row>
                 <Filters />
                {nfts.map((nft) =>(
                  <Col md={4} key={nft.name}>
                    <Nft nft={nft} />
                  </Col>
                ))}
              </Row>)
        }
        
      </Container>
    </>
  );
}

export default Homescreen;
