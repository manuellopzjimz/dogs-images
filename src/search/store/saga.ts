import { homeActions } from "@Home/store";
import { call, CallEffectDescriptor, put, SimpleEffect, StrictEffect, takeLatest } from "@redux-saga/core/effects";

import { getBreeds, getSubBreeds } from '@Search/api';
import { searchActions } from ".";

function *getBreedsSaga (): Generator<StrictEffect, any, any> {
    try {
        yield put(searchActions.setLoadingFlag(true));

        const breeds = yield call(() => getBreeds());

        yield put(searchActions.setBreeds(breeds));
    } catch (error) {
        yield put(homeActions.setError({isError: true, errorMessage: 'breedsNotRetrieved'}))
    } finally {
        yield put(searchActions.setLoadingFlag(false));
    }
}

function *getSubBreedsSaga (action: any): Generator<StrictEffect, any, any> {
    try {
        yield put(searchActions.setLoadingFlag(true));

        const subBreeds = yield call(() => getSubBreeds(action.payload));

        yield put(searchActions.setSubBreeds(subBreeds));
    } catch (error) {
        yield put(homeActions.setError({isError: true, errorMessage: 'subBreedsNotRetrieved'}))
    } finally {
        yield put(searchActions.setLoadingFlag(false));
    }
}

export const searchSagas = [
    takeLatest(searchActions.getBreeds, getBreedsSaga),
    takeLatest(searchActions.getSubBreeds, getSubBreedsSaga)
]; 