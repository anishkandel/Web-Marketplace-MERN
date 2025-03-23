import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterNft } from "../actions/nftAction";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className="p-3  mt-3 ">
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="serach nfts"
            />
          </Col>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>image</option>
              <option>video</option>
              <option>gif</option>
            </select>
          </Col>
        
        </Row>
      </Form>
      <Col>
        
            <Button className="d-inline w-100 " 
              onClick={() => {
                dispatch(filterNft(searchkey, category));
              }}
            >
              Search
            </Button>
          </Col>
    </div>
  );
};

export default Filters;
