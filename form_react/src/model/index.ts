import { combineReducers } from 'redux';
import { reducer as formReducer } from './form';

export const stores = combineReducers({
    formReducer
});
