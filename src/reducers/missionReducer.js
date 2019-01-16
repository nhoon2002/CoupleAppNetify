export default (
  state = {
    error: false,
    processed: false,
    data: [],
    mission: {}
  },
  action
) => {
  switch (action.type) {
    case "FETCH_MISSIONS_COMPLETED":
      return {
        ...state,
        processed: true,
        data: action.payload
      };
    case "FETCH_MISSION_COMPLETED":
      return {
        ...state,
        processed: true,
        mission: action.payload
      };
    default:
      return state;
  }
};
