import { takeLatest, all, call, put, } from 'redux-saga/effects'
import { GET_PRODUCTS_REQUEST } from '../reducers/product'
import actions from '../actions'
import services from '../services'

export default function* productSaga() {
  yield all([
    yield takeLatest(GET_PRODUCTS_REQUEST, getProductsRequest)
  ])
}

function* getProductsRequest({ callback }) {
  try {
    const { data } = yield call(services.getProducts)
    yield put(actions.getProductsSuccess(data.products))
    if (callback) callback()
  } catch (error) {
    yield put(actions.getProductsFailure(error))
  }
}