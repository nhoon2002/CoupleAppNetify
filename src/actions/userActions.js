import axios from "axios";
import { DEFAULT_API_URL } from "../constants";
import { browserHistory } from "react-router";
import firebase from "firebase/app";
import "firebase/auth";

export const sampleAction = () => dispatch => {
  dispatch({
    type: "SAMPLE_ACTION",
    payload: "result yielded."
  });
};
export const sampleFetch = () => async dispatch => {
  await fetch(DEFAULT_API_URL + "test", {
    method: "POST",
    headers: {
      Accept: "application/json"
      // "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: "test"
    })
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "SAMPLE_FETCH",
        payload: json
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};

export const sampleAxios = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
    dispatch({
      type: "SAMPLE_AXIOS",
      payload: response.data
    });
  });
};
export const getCategories = () => async dispatch => {
  await fetch(DEFAULT_API_URL + "categories", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_CATEGORIES_COMPLETED",
        payload: json.categories
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const getMissions = () => async dispatch => {
  await fetch(DEFAULT_API_URL + "missions", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_MISSIONS_COMPLETED",
        payload: json.missions
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const getOneMission = m_id => async dispatch => {
  await fetch(DEFAULT_API_URL + "get-mission", {
    method: "POST",
    headers: {
      Accept: "application/json"
      // "Content-Type": "application/json"
    },
    body: JSON.stringify({
      m_id: m_id
    })
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_MISSION_COMPLETED",
        payload: json.mission[0]
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const getCoupons = () => async dispatch => {
  await fetch(DEFAULT_API_URL + "coupons", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_COUPONS_COMPLETED",
        payload: json.coupons
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const getUsers = () => async dispatch => {
  await fetch(DEFAULT_API_URL + "get-users", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_USERS_COMPLETED",
        payload: json.users
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const getCart = id => async dispatch => {
  console.log(id);
  await fetch(DEFAULT_API_URL + "get-cart", {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify(id)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_CART_COMPLETED",
        payload: json.cart
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const addToCart = data => async dispatch => {
  console.log(data);
  console.log("ADDING TO CART");
  await fetch(DEFAULT_API_URL + "add-to-cart", {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      if (json.status) {
        dispatch({
          type: "ADDED_TO_CART",
          payload: true
        });

        dispatch(
          notificationToggle({
            currentlyShowing: false,
            msg: "Item added to cart!",
            type: "success"
          })
        );
      } else {
        dispatch(
          notificationToggle({
            currentlyShowing: false,
            msg: json.message,
            type: "danger"
          })
        );
      }
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const createNewMission = data => async dispatch => {
  console.log(data);
  console.log("CREATING NEW MISSION");
  await fetch(DEFAULT_API_URL + "create-new-mission", {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      console.log(DEFAULT_API_URL + "create-new-mission");
      if (json.status) {
        dispatch({
          type: "CREATED_MISSION_SUCCESS",
          payload: true
        });
        browserHistory.push("/missions");
        this.dispatch(
          notificationToggle({
            currentlyShowing: false,
            msg: "New mission added!",
            type: "success"
          })
        );
      } else {
        dispatch(
          notificationToggle({
            currentlyShowing: false,
            msg: json.message,
            type: "danger"
          })
        );
      }
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const missionSucceeded = data => async dispatch => {
  console.log(data);
  console.log("Giving points...");
  await fetch(DEFAULT_API_URL + "mission-succeeded", {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      if (json.status) {
        browserHistory.push("/missions");
        this.dispatch(
          notificationToggle({
            currentlyShowing: false,
            msg: "Points have been awarded!",
            type: "success"
          })
        );
      } else {
        dispatch(
          notificationToggle({
            currentlyShowing: false,
            msg: json.message,
            type: "danger"
          })
        );
      }
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const removeFromCart = data => async dispatch => {
  console.log(data);
  console.log("REMOVE FROM CART");
  await fetch(DEFAULT_API_URL + "remove-from-cart", {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      if (json.status) {
        dispatch({
          type: "REMOVED_FROM_CART",
          payload: true
        });
        dispatch(
          notificationToggle({
            currentlyShowing: false,
            msg: "Removed item from cart.",
            type: "warning"
          })
        );
        dispatch(getCart(data));
      } else {
        dispatch(
          notificationToggle({
            currentlyShowing: false,
            msg: json.message,
            type: "danger"
          })
        );
      }
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const getProductList = () => async dispatch => {
  // TODO: make 'category / filter / subcategory' a parameter.
  await fetch(DEFAULT_API_URL + "get-product-list", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_PRODUCTLIST_COMPLETED",
        payload: json.productlist
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const getFeaturedList = () => async dispatch => {
  // TODO: make 'category / filter / subcategory' a parameter.
  await fetch(DEFAULT_API_URL + "get-featured-list", {
    method: "POST",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_FEATUREDLIST_COMPLETED",
        payload: json.productlist
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const modalToggle = (currentStatus, type) => dispatch => {
  if (currentStatus) {
    dispatch({
      type: "SWITCH_MODAL_OFF",
      payload: { status: false, type: "" }
    });
  } else {
    dispatch({
      type: "SWITCH_MODAL_ON",
      payload: { status: true, type: type }
    });
  }
};
export const notificationToggle = currentStatus => dispatch => {
  if (currentStatus.currentlyShowing) {
    dispatch({
      type: "SWITCH_NOTIFICATION_OFF",
      payload: { show: false, msg: "" }
    });
  } else {
    //If it wasnt showing already, toggle notification on, then set a timer to automatically disappear.
    dispatch({
      type: "SWITCH_NOTIFICATION_ON",
      payload: { show: true, msg: currentStatus.msg, type: currentStatus.type }
    });
    setTimeout(
      () =>
        dispatch({
          type: "SWITCH_NOTIFICATION_OFF",
          payload: { show: false, msg: "" }
        }),
      3000
    );
  }
};
export const requestLogin = () => dispatch => {
  dispatch(modalToggle(false, "login"));
  dispatch(
    notificationToggle({
      currentlyShowing: false,
      msg: "You must login first",
      type: "danger"
    })
  );
};
export const checkSession = () => dispatch => {
  let firebaseUser = firebase.auth().currentUser;

  // If a user is not logged in...
  if (!firebaseUser) {
    // Tell the reducer to clear session prop
    dispatch({ type: "SESSION_NULL", payload: "" });
    console.log("Auth status changed: not logged in.");
    // Push the user to the main page if not logged in.
    const loc = browserHistory.getCurrentLocation().pathname;
    if (loc !== "/") {
      browserHistory.push("/");
    }
    dispatch(requestLogin());
  } else {
    dispatch({ type: "SESSION_EXISTS", payload: firebaseUser });
    dispatch(getUsers());
  }
};
export const signOut = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(function(result) {
      dispatch({ type: "SESSION_NULL", payload: "" });
      dispatch({
        type: "SWITCH_MODAL_OFF",
        payload: false
      });
    });
  //signs out current user
  localStorage.removeItem("user");
  browserHistory.push("/");
};
export const SigninLocal = (email, password) => dispatch => {
  dispatch({ type: "LOGIN_LOCAL_ACCOUNT" });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log("-------local------");
      console.log(user.email, user.uid);
      console.log("-------local------");
      // Keep in mind that on successful login, this will trigger a checkSession from routes.jsx, updating currentUser at store.
      dispatch({
        type: "LOCAL_ACCOUNT_SUCCESS",
        payload: { dbUser: user }
      });

      dispatch({
        type: "SWITCH_MODAL_OFF",
        payload: false
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      let currentStatus = {
        currentlyShowing: false,
        type: "danger",
        msg: errorMessage
      };
      dispatch(
        notificationToggle({
          currentlyShowing: false,
          msg: currentStatus.msg,
          type: currentStatus.type
        })
      );

      dispatch({
        type: "LOGIN_LOCAL_ERROR",
        payload: errorMessage
      });
    });
};
