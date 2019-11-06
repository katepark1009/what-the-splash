import { all } from 'redux-saga/effects'

//all promise all이랑 비슷함


import imagesSaga from './imagesSaga'
import statsSaga from './statsSaga'

// worker saga
// function* handleImagesLoad() {
//   console.log('HEy from worker')
//   console.log(put({ type: 'ACTION_FROM_WORKER' })) //saga가 보내는 object 확인할 수 있음
//   yield put({ type: 'ACTION_FROM_WORKER' })
//   console.log('fetching images')
// }

// watcher saga
// function* rootSaga() {
//   yield takeEvery('HELLO', workerSaga)
//   yield takeEvery(IMAGES.LOAD, handleImagesLoad)
//   ? take(IMAGES.LOAD) 
//   ? call(handleImagesLoad) - https://redux-saga.js.org/docs/Glossary.html
// }
export default function* rootSaga() {
  yield all([
    imagesSaga(),
    statsSaga()
  ])
}

//! watcher saga -> actions -> worker saga
//! blocking & non-blocking event