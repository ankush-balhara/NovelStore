import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
// import {combineReducers} from "redux.js/tookit";

const store = configureStore({
    reducer: {
        // reducers
        auth: authReducer,
    },
});

export default store;