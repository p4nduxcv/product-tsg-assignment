import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducer/rootReducer";

const Store = configureStore({
    reducer: rootReducer(),
});

export type DispatchType = typeof Store.dispatch;

export default Store;