import { combineReducers } from 'redux';
import { digimonReducer } from './digimonReducer';
import { urlReducer } from "./urlReducer";

export default combineReducers({
  digimonReducer,
  urlReducer
});