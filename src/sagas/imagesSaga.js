import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { IMAGES } from '../constants'
import { fetchImages } from '../api'
import { setImages, setError } from '../actions'
const getPage = state => state.nextPage

function* handleImagesLoad() {
  try {
    const page = yield select(getPage)
    console.log("TCL: function*handleImagesLoad -> page", page)
    const images = yield call(fetchImages, page)
    yield put(setImages(images)) //fetch 끝나고 dispatch action
  } catch (error) {
    //dispatch error action
    yield put(setError(error.toString())) //fetch 끝나고 dispatch action
  }

}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

