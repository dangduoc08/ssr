import { all } from 'redux-saga/effects'
import flagSaga from './flag'

export default function* rootSaga() {
  yield all([
    flagSaga()
  ])
}