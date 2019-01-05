export default (
  state = {
    error: false,
    processed: false,
    data: [],
    featuredData: []
  },
  action
) => {
  switch (action.type) {
    case "FETCH_PRODUCTLIST_COMPLETED":
      return {
        ...state,
        processed: true,
        data: action.payload
      };
    case "FETCH_FEATUREDLIST_COMPLETED":
      return {
        ...state,
        processed: true,
        featuredData: action.payload
      };
    default:
      return state;
  }
};
