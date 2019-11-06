import { fork, take, call, put } from 'redux-saga/effects'
import { IMAGES } from '../constants'
import { fetchImageStats } from '../api'
import { loadImageStats, setImageStats, setImageStatsError } from '../actions'

function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) { //실패할 경우 3번 실행하도록
    try {
      console.log('fetching stats for ', id)
      yield put(loadImageStats(id))
      const res = yield call(fetchImageStats, id)
      yield put(setImageStats(id, res.downloads.total))
      return true //exit saga, 
    } catch (e) { }
  }
  yield put(setImageStatsError(id))
}

export default function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS)
    //fork 는 call이랑 비슷한데 non blocking 이고 pararell로 실행가능?
    //forEach 안에 yield 쓸 수 없음
    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id)
    }
  }
}