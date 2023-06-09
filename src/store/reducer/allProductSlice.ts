import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { IProduct } from '../../interfaces/IProduct';

export interface IProductState {
    products: IProduct[],
    isLoading: boolean,
    isSuccessful: boolean,
    error: any
}

const initialState: IProductState = {
    products: [],
    isLoading: false,
    isSuccessful: false,
    error: {}
}

export const allProductSlice = createSlice({
    name: 'allProduct',
    initialState,
    reducers: {
        getAllProductRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getAllProductSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.products = action.payload
            state.isLoading = false;
            state.isSuccessful = true
        },
        getAllProductFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false
            state.result = action.payload
        },
    },
})

export const {
    getAllProductRequestAction,
    getAllProductSuccessAction,
    getAllProductFailedAction
} = allProductSlice.actions

export default allProductSlice.reducer