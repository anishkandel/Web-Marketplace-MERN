export const getAllNftReducer= (state={nfts:[]}, action) =>{
  switch(action.type){
    case 'GET_NFTS_REQUEST':
      return{
        ...state,
        loading:true
      }
    case 'GET_NFTS_SUCCESS':
      return{
        nfts:action.payload,
        loading:false
      }
      case 'GET_NFTS_FAIL':
        return{
          error:action.payload,
          loading:false
        }  
    
      default: return state
  }
};
export const addNftReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NFTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_NFTS_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "ADD_NFTS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const getNftByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_NFTBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_NFTBYID_SUCCESS":
      return {
        nft: action.payload,
        loading: false,
      };
    case "GET_NFTBYID_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateNftByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_NFTBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_NFTBYID_SUCCESS":
      return {
        updatesuccess: true,
        updateloading: false,
      };
    case "UPDATE_NFTBYID_FAIL":
      return {
        updateloading: false,
        updateerror: action.payload,
      };
    default:
      return state;
  }
};
