import { ActionTypes } from '../contants/action-types';
export const setRepositories = (repositories) => {
  return {
    type: ActionTypes.SET_REPOSITORIES,
    payload: repositories,
  };
};

// export const selectedProduct = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCT,
//     payload: product,
//   };
// };
