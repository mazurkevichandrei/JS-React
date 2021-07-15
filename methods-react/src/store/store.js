import counter from './reducers/test';
import methods from './methods';
import buttonsProps from './reducers/buttonsProps'
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: { counter, methods, buttonsProps },
  });
