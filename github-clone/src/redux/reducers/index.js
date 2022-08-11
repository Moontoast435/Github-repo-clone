import { combineReducers } from 'redux';

import { repositoryReducer } from './repositoryReducer';

const reducers = combineReducers({
  allRepositories: repositoryReducer,
});
export default reducers;
