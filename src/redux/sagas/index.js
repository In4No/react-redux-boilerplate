import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=1a2248c5131e49e4a2d47618f146b759')
    .then(response => response.json()).then(data => data);
  yield put({ type: 'NEWS_RECEIVED', json: json.articles });
}
function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
