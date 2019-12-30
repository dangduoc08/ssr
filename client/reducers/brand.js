export const GET_BRANDS_REQUEST = 'GET_BRANDS_REQUEST'
export const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS'
export const GET_BRANDS_FAILURE = 'GET_BRANDS_FAILURE'

const inititalState = {
  getBrandsPending: false,
  brands: [],
  error: null
}

const brand = (state = inititalState, { type, brands, error }) => {
  switch (type) {
    case GET_BRANDS_REQUEST:
      return {
        ...state,
        getBrandsPending: true
      }
    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        getBrandsPending: false,
        brands
      }
    case GET_BRANDS_FAILURE:
      return {
        ...state,
        getBrandsPending: false,
        error
      }
    default:
      return state
  }
}

export default brand