import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deleteNft, getAllNfts } from "../../actions/nftAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Nftslist = () => {
  const dispatch = useDispatch();
  const nftstate = useSelector((state) => state.getAllNftReducer);
  const { loading, nfts, error } = nftstate;
  console.log(nfts);
  useEffect(() => {
    dispatch(getAllNfts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching nfts {error}</Error>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>NFT Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {nfts &&
                nfts.map((nft) => (
                  <tr>
                    <td>
                      <img
                        src={nft.image}
                        alt="logo"
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{nft.name}</td>
                    <td>
                      Image : {nft.prices[0]["image"]}
                      <br />
                      Video: {nft.prices[0]["video"]}
                      <br />
                      Gif : {nft.prices[0]["gif"]}
                    </td>
                    <td>{nft.category}</td>
                    <td>
                      <Link to={`/admin/editnft/${nft._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deleteNft(nft._id));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Nftslist;
