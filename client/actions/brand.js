import {
  GET_BRANDS_REQUEST,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE
} from '../reducers/brand'

export const getBrandsRequest = callback => ({
  type: GET_BRANDS_REQUEST,
  callback
})

export const getBrandsSuccess = brands => ({
  type: GET_BRANDS_SUCCESS,
  brands
})

export const getBrandsFailure = error => ({
  type: GET_BRANDS_FAILURE,
  error
})