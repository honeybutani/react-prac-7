const INITIAL_STATE = {
  selectedid: null,
  users: [],
  pageUpdated_data: [],
  loading: true,
  error: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "onMouseEnter":
      return { ...state, selectedid: action.payload };
    case "onMouseLeave":
      return { ...state, selectedid: action.payload };
    case "FetchUserRequest":
      return { ...state, loading: true };
    case "FetchUserSuccess":
      return {
        ...state,
        users: action.payload,
        selectedIndex: null,
        error: "",
        loading: false,
      };
    case "FetchUserFailure":
      return { ...state, users: [], error: action.payload, loading: false };

    case "StoreData":
      let ListPage = [...state.pageUpdated_data];
      ListPage[action.pageNumber] = action.payload;
      return {
        ...state,
        pageUpdated_data: ListPage,
      };
    default:
      return state;
  }
}
