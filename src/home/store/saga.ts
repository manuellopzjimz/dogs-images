import { resultsSagas } from "@DisplayResults/store/saga";
import { searchSagas } from "@Search/store/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga () {
    yield all([...searchSagas, ...resultsSagas]);
}