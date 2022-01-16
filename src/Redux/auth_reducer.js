import { authAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";
const ADD_PHONE_NUMBER = "ADD_PHONE_NUMBER";
const DELETE_PHONE_NUMBER = "DELETE_PHONE_NUMBER";
const SET_PHONE_NUMBER = "SET_PHONE_NUMBER";

let initialState = {
  userID: null,
  email: null,
  isAuth: false,
  data: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_PHONE_NUMBER:
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case DELETE_PHONE_NUMBER:
      return {
        ...state,
        data: state.data.filter((data) => data.key !== action.key),
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        data: [...state.data.map((u) => {
          if (u.key=== action.number.key) {
            return {
              ...action.number
            }
          } else {
            return u
          }
        })],
      };
    default: {
      return state;
    }
  }
};

export const setAuthUserData = (userID, email, isAuth, data) => ({
  type: SET_USER_DATA,
  payload: { userID, email, isAuth, data },
});

export const addPhoneNumber = (data) => ({ type: ADD_PHONE_NUMBER, data });
export const deletePhoneNumber = (key) => ({ type: DELETE_PHONE_NUMBER, key });
export const setPhoneNumber = (number) => ({ type: SET_PHONE_NUMBER, number });

export const login = (email, password) => (dispatch) => {
  authAPI.login(email, password).then((response) => {
    let { email, id, data } = response.data.user;
    dispatch(setAuthUserData(id, email, true, data));
  });
};

export const logout = () => (dispatch) => {
  dispatch(setAuthUserData(null, null, false));
  console.log("out");
};

export default authReducer;
