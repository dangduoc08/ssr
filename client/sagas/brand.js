import { takeLatest, all, call, put, } from 'redux-saga/effects'
import { GET_BRANDS_REQUEST } from '../reducers/brand'
import actions from '../actions'
import services from '../services'

export default function* brandSaga() {
  yield all([
    yield takeLatest(GET_BRANDS_REQUEST, getBrandsRequest)
  ])
}

function* getBrandsRequest({ callback }) {
  try {
    const { data } = yield call(services.getBrands)
    yield put(actions.getBrandsSuccess(data.brands))
    if (callback) callback()
  } catch (error) {
    yield put(actions.getBrandsFailure(error))
    alert(error.message)
  }
}