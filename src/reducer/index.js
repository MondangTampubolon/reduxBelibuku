import { combineReducers } from 'redux';

import { bukuReducer } from './bukuReducer';

export const rootReducer = combineReducers({
  buku: bukuReducer,
})