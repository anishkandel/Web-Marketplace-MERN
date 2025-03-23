import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addNft } from "../../actions/nftAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../Loader";
import Error from "./../Error";
import Success from "./../Success";
const AddNewNFT = () => {
  const [name, setname] = useState("");
  const [imagePrice, setimagePrice] = useState();
  const [videoPrice, setvideoPrice] = useState();
  const [gifPrice, setgifPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const addNftState = useSelector((state) => state.addNftReducer);
  const { loading, error, success } = addNftState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const nft = {
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
    dispatch(addNft(nft));
  };
  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="add new NFT error" />}
      {success && <Success success="NFT Added Successfully" />}
      <Form onSubmit={submitForm} className="p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Update NFT Name"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>image Price</Form.Label>
              <Form.Control
                type="text"
                value={imagePrice}
                onChange={(e) => setimagePrice(e.target.value)}
                placeholder="Enter Image Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Gif Price</Form.Label>
              <Form.Control
                type="text"
                value={gifPrice}
                onChange={(e) => setgifPrice(e.target.value)}
                placeholder="Enter Gif price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Video Price</Form.Label>
              <Form.Control
                type="text"
                value={videoPrice}
                onChange={(e) => setvideoPrice(e.target.value)}
                placeholder="Enter NFT price"
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
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default AddNewNFT;
