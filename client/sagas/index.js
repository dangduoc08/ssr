import { all } from 'redux-saga/effects'
import productSaga from './product'
import brandSaga from './brand'

export default function* rootSaga() {
  yield all([
    productSaga(),
    brandSaga()
  ])
}