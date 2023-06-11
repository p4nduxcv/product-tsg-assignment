import type { Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { IProduct } from '../../interfaces/IProduct';
import { DispatchType } from '../store';


export interface IProductState {
    products: IProduct[],
    selectedProduct?: IProduct
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


        getProductRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getProductSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.selectedProduct = action.payload
            state.isLoading = false;
            state.isSuccessful = true
        },
        getProductFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false
            state.result = action.payload
        },



    },
})

export const getAllProducts = (query?: string) => {
    return async (dispatch: DispatchType) => {
        dispatch(allProductSlice.actions.getAllProductRequestAction());
        try {
            const response = await fetch(query ? `https://dummyjson.com/products/search?q=${query}` : `https://dummyjson.com/products`);
            const data = await response.json();
            const products = data?.products ?? []
            dispatch(allProductSlice.actions.getAllProductSuccessAction(products))
        } catch (error: any) {
            dispatch(allProductSlice.actions.getAllProductFailedAction(error))
        }
    }
}

export const getProductDetail = (id: number) => {
    return async (dispatch: DispatchType) => {
        dispatch(allProductSlice.actions.getProductRequestAction());
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            dispatch(allProductSlice.actions.getProductSuccessAction(data))
        } catch (error: any) {
            dispatch(allProductSlice.actions.getProductFailedAction(error))
        }
    }
}


export const {
    getAllProductRequestAction,
    getAllProductSuccessAction,
    getAllProductFailedAction
} = allProductSlice.actions

export default allProductSlice.reducer