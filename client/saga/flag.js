import { takeEvery, all, call, put, } from 'redux-saga/effects'
import axios from 'axios'
import { fetchFlagSuccess } from '../redux/actions'

export default function* flagSaga() {
  yield all([
    yield takeEvery('FETCH_FLAGS_REQUEST', fetchFlags)
  ])
}

function* fetchFlags({ cb }) {
  try {
    const data = yield call(function () { return axios.get('http://react-ssr-api.herokuapp.com/users') })
    yield put(fetchFlagSuccess(data.data))
    if (cb) cb()
  } catch (err) {
    console.log(err)
  }
}