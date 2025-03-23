import React, { useState,useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNftById,  updateNft } from "../../actions/nftAction";
import Loader from "./../Loader";
import Error from "./../Error";
import { useParams } from 'react-router-dom';

const EditNft = () => {
  const [name, setname] = useState("");
  const [imagePrice, setimagePrice] = useState();
  const [gifPrice, setgifPrice] = useState();
  const [videoPrice, setvideoPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const dispatch = useDispatch();
  const getNftByState = useSelector((state) => state.getNftByIdReducer);
  const { error, nft } = getNftByState;
  const updateNftState = useSelector((state) => state.updateNftByIdReducer);
  const { updateloading } = updateNftState;
  const { nftId } = useParams();

  useEffect(() => {   
if (nft){
      if (nft._id === nftId) {
        setname(nft.name);
        setdescription(nft.description);
        setcategory(nft.category);
        setimage(nft.image);
        setimagePrice(nft.prices[0]["image"]);
        setvideoPrice(nft.prices[0]["video"]);
        setgifPrice(nft.prices[0]["gif"]);
      } else {
        dispatch(getNftById(nftId));
      }
    } else {
      dispatch(getNftById(nftId));
    }
  }, [nft, dispatch, nftId]);
  const submitForm = (e) => {
    e.preventDefault();
    const updatedNft = {
      _id: nftId,
      name,
      image,
      description,
      category,
      prices: {
        image: imagePrice,
        video: videoPrice,
        gif: gifPrice,
      },
    };
    dispatch(updateNft(updatedNft));
  };
  return (
    <div>
      {updateloading && <Loader />}
      {error && <Error error="add new pizza error" />}

      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Image Price</Form.Label>
              <Form.Control
                type="text"
                value={imagePrice}
                onChange={(e) => setimagePrice(e.target.value)}
                placeholder="Enter Image Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Video Price</Form.Label>
              <Form.Control
                type="text"
                value={videoPrice}
                onChange={(e) => setvideoPrice(e.target.value)}
                placeholder="Enter medium price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Gif Price</Form.Label>
              <Form.Control
                type="text"
                value={gifPrice}
                onChange={(e) => setgifPrice(e.target.value)}
                placeholder="Enter larg price"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              ttype="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update NFTs
        </Button>
      </Form>
    </div>
  );
};

export default EditNft;
