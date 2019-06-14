export default (
  state = {
    error: false,
    processed: false,
    data: [],
    mission: {},
    completed_missions: []
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
    case "FETCH_HISTORY_COMPLETED":
      return {
        ...state,
        processed: true,
        completed_missions: action.payload
      };
    default:
      return state;
  }
};
