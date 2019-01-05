export default (
  state = {
    loggedin: false,
    db_currentUser: ""
  },
  action
) => {
  switch (action.type) {
    case "SESSION_EXISTS": {
      return {
        ...state,
        loggedin: true,
        db_currentUser: action.payload
      };
    }
    case "SESSION_NULL": {
      return {
        ...state,
        loggedin: false,
        db_currentUser: ""
      };
    }
    default:
      return state;
  }
};
