import { ActionTypes } from '../contants/action-types';

const initialState = {
  repositories: [],
};

export const repositoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_REPOSITORIES:
      return { ...state, repositories: payload };
    default:
      return state;
  }
};
