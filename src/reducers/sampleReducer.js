export default (
  state = {
    result: "",
    fetch: [],
    axios: []
  },
  action
) => {
  switch (action.type) {
    case "SAMPLE_ACTION":
      return {
        ...state,
        result: action.payload
      };
    case "SAMPLE_FETCH":
      return {
        ...state,
        fetch: action.payload
      };
    case "SAMPLE_AXIOS":
      return {
        ...state,
        axios: action.payload
      };
    default:
      return state;
  }
};
