import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { IMAGES } from '../constants'

function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

export default imagesSaga