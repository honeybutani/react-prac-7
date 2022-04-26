import axios from "axios";
export const ProfileHover = (id) => {
  return {
    type: "onMouseEnter",
    payload: id,
  };
};

export const ProfileHoverLeave = () => {
  return {
    type: "onMouseLeave",
    payload: null,
  };
};
export const FetchUserRequest = () => {
  return {
    type: "FetchUserRequest",
  };
};
export const StoreData = (users, pageNumber) => {
  return {
    type: "StoreData",
    payload: users,
    pageNumber: pageNumber,
  };
};

export const FetchUserSuccess = (users) => {
  return {
    type: "FetchUserSuccess",
    payload: users,
  };
};

export const FetchUserFailur = (error) => {
  return {
    type: "FetchUserFailure",
    payload: error,
  };
};
export const setUsers = (currentPage, page_data) => {
  return (dispatch) => {
    if (page_data && page_data[currentPage]) {
      dispatch(FetchUserSuccess(page_data[currentPage]));
    } else {
      axios
        .get(`${process.env.REACT_APP_API} ${currentPage}`)
        .then((response) => {
          const users = response.data.data;
          dispatch(FetchUserSuccess(users));
          dispatch(StoreData(users, currentPage));
        })
        .catch((err) => {
          dispatch(FetchUserFailur(err));
        });
    }
  };
};
