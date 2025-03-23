
import axios from 'axios'

import swal from "sweetalert";

export const getAllNfts=() => async (dispatch) => {
  dispatch ({type:'GET_NFTS_REQUEST'})
  try {
    const response= await axios.get('/api/nfts/getAllNfts')

    dispatch ({type:'GET_NFTS_SUCCESS', payload:response.data})
  } catch(err){
    dispatch ({type:'GET_NFTS_FAIL', payload:err});
  }
}
export const addNft = (nft) => async (dispatch) => {
  dispatch({ type: "ADD_NFTS_REQUEST" });
  try {
    await axios.post("/api/nfts/addnft", { nft });
    dispatch({ type: "ADD_NFTS_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_NFTS_FAIL", payload: err });
  }
};
export const getNftById = (nftId) => async (dispatch) => {
  dispatch({ type: "GET_NFTBYID_REQUEST" });
  try {
    const response = await axios.post("/api/nfts/getnftbyid", { nftId });
    dispatch({ type: "GET_NFTBYID_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_NFTBYID_FAIL", payload: err });
  }
};
export const updateNft= (updatedNft) => async (dispatch) => {
  dispatch({ type: "UPDATE_NFTBYID_REQUEST" });
  try {
    const response = await axios.post("/api/nfts/updatenft", {
      updatedNft,
    });
    dispatch({ type: "UPDATE_NFTBYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/nftslist";
  } catch (err) {
    dispatch({ type: "UPDATE_NFTBYID_FAIL", payload: err });
  }
};

export const deleteNft = (nftId) => async (dispatch) => {
  try {
    await axios.post("/api/nfts/deletenft", { nftId });
    swal("Nft Deleted Succss!", "success");
    window.location.href = "/admin/nftslist";
    // console.log(res);
  } catch (error) {
    swal("Error While Deleteing NFT");
  }
};

export const filterNft = (searchkey, category) => async (dispatch) => {
  let filterdNft;
  dispatch({ type: "GET_NFTS_REQUEST" });
  try {
    const res = await axios.get("/api/nfts/getAllNfts");
    filterdNft = res.data.filter((nft) =>
      nft.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filterdNft = res.data.filter(
        (nft) => nft.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_NFTS_SUCCESS", payload: filterdNft });
  } catch (error) {
    dispatch({ type: "GET_NFTS_FAIL", payload: error });
  }
};

