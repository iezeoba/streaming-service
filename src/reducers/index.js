import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
// import { reducer } from 'redux-form'; //this is the normal way to import the form reducer//
import { reducer as formReducer } from "redux-form"; //this is to avoid ambiguity. see note at footer//
import { streamReducer } from "./streamReducer";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});

//the imports on line 3 & 4 are the same, just different approaches//
//the 'reducer' imported is inbuilt in the redux-form module//we didn't create it//
//the idea of importing 'reducer as formReducer' is to avoid ambiguity//
//simply using 'reducer' can confuse with the reducers we created by ourselves//
//remember named exports must be imported with the exact name//
//however you can rename the import ie { myimport as preferedname } as above//
//the imported redux-form reducer is passed to the combineReducers with a key of 'form'//
//the key 'form' must be used. it is not arbitrary//
