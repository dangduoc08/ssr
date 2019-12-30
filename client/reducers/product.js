export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

const inititalState = {
  getProductsPending: false,
  products: [],
  error: null
}

const product = (state = inititalState, { type, products, error }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        getProductsPending: true
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        getProductsPending: false,
        products
      }
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        getProductsPending: false,
        error
      }
    default:
      return state
  }
}

export default product