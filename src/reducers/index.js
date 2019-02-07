import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  // Our state object will have a key of libraries,
  // and a value of the list of libraries produced by our LibraryReducer
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});
