export const login = () => {
  return {
    type: `SIGN_IN`,
  };
};

export const logout = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const setUser = (userData) => {
  return {
    type: "SET_USER",
    payload: userData,
  };
};

// // src/actions/actions.js
// import axios from "axios";

// Action Types
// export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
// export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
// export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
// export const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";

// Action Creators
// export const fetchData = () => {
//   return (dispatch) => {
//     axios
//       .get("/api/cryptocurrency/listings/latest")
//       .then((response) => {
//         dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.data });
//       })
//       .catch((error) => {
//         dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
//       });
//   };
// };

// export const setSearchTerm = (searchTerm) => ({
//   type: SET_SEARCH_TERM,
//   payload: searchTerm,
// });

// export const setSelectedItem = (item) => ({
//   type: SET_SELECTED_ITEM,
//   payload: item,
// });
