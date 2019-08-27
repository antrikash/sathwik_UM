import { actionTypes } from 'features/core/actionTypes';

const initialState = {
  userData: [],
  page: 1,
  createUser: {
    message: undefined,
  },
  deleteUser: {
    message: undefined,
    status: '',
  },
  editUser: {
    showEditPage: false,
    selectedUser: {},
  },
};

export const user = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.GET_USER_LIST:
    state = {
      ...state,
      loading: true,
    };
    break;

  case actionTypes.GET_USER_LIST_FULFILLED:
    const { data, ...rest } = action.payload;
    state = {
      ...state,
      userData: data,
      loading: false,
      ...rest,
    };
    break;

  case actionTypes.GET_USER_LIST_REJECTED:
    state = {
      ...state,
      error: action.payload,
      loading: false,
    };
    break;

  case actionTypes.SET_PAGE:
    state = {
      ...state,
      page: action.payload,
    };
    break;

  case actionTypes.CREATE_USER:
    state = {
      ...state,
      loading: true,
    };
    break;

  case actionTypes.CREATE_USER_FULFILLED:
    state = {
      ...state,
      createUser: {
        ...state.createUser,
        response: action.payload,
        message: 'success',
      },
      loading: false,
    };
    break;

  case actionTypes.CREATE_USER_REJECTED:
    state = {
      ...state,
      createUser: {
        ...state.createUser,
        response: action.payload,
        message: 'failure',
        loading: false,
      },
    };
    break;

  case actionTypes.HIDE_MESSAGE:
    state = {
      ...state,
      createUser: {
        ...state.createUser,
        response: {},
        message: undefined,
      },
    };
    break;

  case actionTypes.DELETE_USER:
    state = {
      ...state,
      loading: true,
    };
    break;

  case actionTypes.DELETE_USER_FULFILLED:
    const newData = [...state.userData.filter(item => item.id !== action.payload)];
    state = {
      ...state,
      loading: false,
      deleteUser: {
        ...state.deleteUser,
        message: 'success',
        status: action.payload,
      },
      userData: newData,
    };
    break;

  case actionTypes.EDIT_USER:
    state = {
      ...state,
      editUser: {
        ...state.editUser,
        selectedUser: action.payload,
        showEditPage: true,
      },
    };
    break;

  case actionTypes.UPDATE_USER:
    state = {
      ...state,
      loading: true,
    };
    break;

  case actionTypes.UPDATE_USER_FULFILLED:
    const updatedData = [...state.userData.map(user => {
      if (user.id === action.payload.details.id) {
        return action.payload.details;
      } return user;
    })];
    state = {
      ...state,
      userData: updatedData,
      editUser: {
        ...state.editUser,
        showEditPage: false,
        selectedUser: {},
      },
    };
    break;

  case actionTypes.HIDE_EDIT_USER:
    state = {
      ...state,
      editUser: {
        ...state.editUser,
        showEditPage: false,
        selectedUser: {},
      },
    };
    break;

  default:
    return state;
  }
  return state;
};
