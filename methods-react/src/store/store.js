import counter from './reducers/test';
import methods from './methods';
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: { counter, methods },
  });
