const USERNAME_CHANGED = 'username_changed';
const PASSWORD_CHANGED = 'password_changed';
const LOGIN_USER_SUCCESS = 'login_user_success';
const LOGIN_USER_FAILED = 'login_user_failed';
const LOGIN_THERAPIST = 'login_therapist';
const LOGIN_USER = 'login_user';
const LOGIN_PATIENT = 'login_patient';
const LOGOUT_USER = 'logout_user';
const REMOVE_LEVEL = 'remove_level';
const LOGIN_ADMIN = 'login_admin';
const CREATE_USER_SUCCESS = 'create_user_success';

// import {
//  USERNAME_CHANGED,
//  PASSWORD_CHANGED,
//  LOGIN_USER_SUCCESS,
//  LOGIN_USER_FAILED,
//  LOGIN_USER,
//  LOGIN_PATIENT,
//  LOGIN_THERAPIST,
//  LOGOUT_USER,
//  REMOVE_LEVEL
//  } from '../actions/types.js';


const INITIAL_STATE = {
  username: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  token: '',
  level: ''
};

export default (state = INITIAL_STATE, action) => {
    let obj = {};
    switch (action.type) {
    case USERNAME_CHANGED:
        obj = { ...state, username: action.payload, error: '' };
        break;
    case PASSWORD_CHANGED:
        obj = { ...state, password: action.payload, error: '' };
        break;
    case LOGIN_USER_SUCCESS:
        obj = { ...state, user: action.payload, error: '', loading: false, token: action.token };
        break;
    case LOGIN_USER_FAILED:
        obj = { ...state, error: action.error, password: '', loading: false };
        break;
    case LOGIN_THERAPIST:
        obj = { ...state, error: '', level: 'therapist' };
        break;
    case LOGIN_PATIENT:
        obj = { ...state, error: '', level: 'patient' };
        break;
    case LOGIN_ADMIN:
            obj = { ...state, error: '', level: 'administrator' };
            break;
    case LOGIN_USER:
        obj = { ...state, error: '', loading: true };
        break;
    case LOGOUT_USER:
        obj = { ...state, user: '', password: '', token: '', loading: false, error: '' };
        break;
    case REMOVE_LEVEL:
        obj = { ...state, user: '', password: '', token: '', loading: false, level: '', error: '' };
        break;
    case CREATE_USER_SUCCESS:
        obj = { ...state, loading: false };
        break;
    default:
        obj = state;
        break;
  }
  console.log(obj);
  return obj;
};
