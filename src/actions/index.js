import axios from "axios";

const USERNAME_CHANGED = "username_changed";
const PASSWORD_CHANGED = "password_changed";
const LOGIN_USER_SUCCESS = "login_user_success";
const LOGIN_USER_FAILED = "login_user_failed";
const LOGIN_USER = "login_user";
const LOGIN_PATIENT = "login_patient";
const LOGIN_THERAPIST = "login_therapist";
const LOGOUT_USER = "logout_user";
const REMOVE_LEVEL = "remove_level";
const ACTIVE_SCREEN_CHANGED = "screen_changed";
const LOGIN_ADMIN = "login_admin";
const GETTING_DATA = "getting_data";
const DONE_GETTING_DATA = "done_getting_data";
const CREATE_USER_SUCCESS = "create_user_success";

export const loginAsAdmin = () => {
  return dispatch => {
    dispatch({ type: LOGIN_ADMIN });
  };
};

export const loginAsPatient = () => {
  return dispatch => {
    dispatch({ type: LOGIN_PATIENT });
  };
};

export const loginAsTherapist = () => {
  return dispatch => {
    dispatch({ type: LOGIN_THERAPIST });
  };
};

export const backToNoLevel = () => {
  return dispatch => {
    dispatch({ type: REMOVE_LEVEL });
  };
};

export const usernameChanged = text => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const activeScreenChanged = ascreen => {
  return {
    type: ACTIVE_SCREEN_CHANGED,
    payload: ascreen
  };
};

export const activeScreenChanges = () => {
  return {
    type: GETTING_DATA
  };
};

export const getUsers = activeScreen => {
  return dispatch => {
    dispatch({ type: GETTING_DATA });
    const users = activeScreen === "Therapists" ? "therapists" : "patients";
    const config = {
      timeout: 1000,
      headers: { "Content-Type": "application/json" }
    };

    axios
      .get(`http://10.0.2.2:5000/${users}`, config)
      .then(response => {
        if (response.data.success) {
          getUsersSuccess(dispatch, response.data.data);
        } else {
          getUsersFailed(dispatch, response.data.error);
          console.log(
            "reactNativeDemo",
            `response get details:, ${response.data.error}!`
          );
        }
      })
      .catch(error => {
        getUsersFailed(dispatch, error.response.data.error);
        console.log("axios error:", error.response.data.error);
      });
  };
};

export const loginUser = ({ username, password, level }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    const lev = level === "administrator" ? "therapist" : level;
    axios
      .post(`http://10.0.2.2:5000/users/login/${lev}`, null, {
        method: "post",
        timeout: 1000,
        headers: { "Content-Type": "application/json" },
        data: {
          username: "anna",
          password: "12345678"
          // 'username': username,
          // 'password': password
        }
      })
      .then(response => {
        if (response.data.success) {
          loginUserSuccess(dispatch, username, response.data.token);
        } else {
          registerUser({ username, password, level });
          // console.log('reactNativeDemo', `response get details:, ${response.data.error}!`);
        }
      })
      .catch(error => {
        loginUserFailed(dispatch, error.response.data.error);
        console.log("axios error:", error.response.data.error);
      });
  };
};

export const registerUser = ({ username, password, level }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    const lev = level === "administrator" ? "therapist" : level;
    axios
      .post(`http://10.0.2.2:5000/users/register/${lev}`, null, {
        method: "post",
        timeout: 1000,
        headers: { "Content-Type": "application/json" },
        data: {
          username: username,
          password: password
          // 'username': username,
          // 'password': password
        }
      })
      .then(response => {
        if (response.data.success) {
          loginUserSuccess(dispatch, username, response.data.token);
        } else {
          loginUserFailed(dispatch, response.data.error);
          console.log(
            "reactNativeDemo",
            `response get details:, ${response.data.error}!`
          );
        }
      })
      .catch(error => {
        loginUserFailed(dispatch, error.response.data.error);
        console.log("axios error:", error.response.data.error);
      });
  };
};

export const createUser = ({
  username,
  first_name,
  last_name,
  activeScreen,
  occupation_id
}) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    if (username && username !== "") {
      const userType = activeScreen === "Therapists" ? "therapist" : "patient";
      //const userType = "therapist";
      axios
        .post(`http://10.0.2.2:5000/users/create/${userType}`, null, {
          method: "post",
          timeout: 1000,
          headers: { "Content-Type": "application/json" },
          data: {
            username,
            first_name,
            last_name,
            occupation_id
          }
        })
        .then(response => {
          if (response.data.success) {
            creareUserSuccess(dispatch, username, response.data.token);
          } else {
            loginUserFailed(dispatch, response.data.error);
            console.log(
              "reactNativeDemo",
              `response get details:, ${response.data.error}!`
            );
          }
        })
        .catch(error => {
          loginUserFailed(dispatch, error.response.data.error);
          console.log("axios error:", error.response.data.error);
        });
    } else {
      loginUserFailed(dispatch, "Username cant be empty");
    }
  };
};

export const logOutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
  };
};

const loginUserFailed = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    error
  });
};

const loginUserSuccess = (dispatch, user, token) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
    token
  });
};

const creareUserSuccess = dispatch => {
  dispatch({
    type: CREATE_USER_SUCCESS
  });
};

const getUsersFailed = (dispatch, data) => {
  dispatch({
    type: DONE_GETTING_DATA,
    payload: []
  });
};

const getUsersSuccess = (dispatch, data) => {
  dispatch({
    type: DONE_GETTING_DATA,
    payload: data
  });
};
