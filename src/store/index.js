import { configureStore } from '@reduxjs/toolkit';
import salutReducer from '../reducers/salutReducer';
import testReducer from '../reducers/testReducer';

const reducer = {
  salut: salutReducer,
  test: testReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
