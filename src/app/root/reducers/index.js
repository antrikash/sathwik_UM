import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { user } from 'features/core/reducers';

export const rootReducer = combineReducers({
  user,
  form: formReducer,
});
