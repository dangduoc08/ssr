import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from '../reducers/product'

export const getProductsRequest = callback => ({
  type: GET_PRODUCTS_REQUEST,
  callback
})

export const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  products
})

export const getProductsFailure = error => ({
  type: GET_PRODUCTS_FAILURE,
  error
})