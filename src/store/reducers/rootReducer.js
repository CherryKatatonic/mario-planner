import authReducer from './authReducer';
import projectReducer from  './projectReducer';
import routeReducer from  './routeReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    route: routeReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;