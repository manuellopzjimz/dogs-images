import { homeActions } from "@Home/store";
import { call, CallEffectDescriptor, put, SimpleEffect, StrictEffect, takeLatest } from "@redux-saga/core/effects";

import { getBreedPhotos, getSubBreedPhotos } from '@DisplayResults/api';
import { resultsActions } from ".";

function *getPhotosSaga (action: any): Generator<StrictEffect, any, any> {
    try {
        yield put(resultsActions.setLoadingFlag(true));

        const photos = yield call(() => getBreedPhotos(action.payload));

        yield put(resultsActions.setPhotos(photos));
    } catch (error) {
        yield put(homeActions.setError({isError: true, errorMessage: 'breedNotFound'}));
        yield put(resultsActions.setPhotos([]));
    } finally {
        yield put(resultsActions.setLoadingFlag(false));
    }
}

function *getSubBreedPhotosSaga (action: any): Generator<StrictEffect, any, any> {
    try {
        yield put(resultsActions.setLoadingFlag(true));

        const photos = yield call(() => getSubBreedPhotos(action.payload.breed, action.payload.subBreed));

        yield put(resultsActions.setPhotos(photos));
    } catch (error) {
        yield put(homeActions.setError({isError: true, errorMessage: 'breedNotFound'}));
        yield put(resultsActions.setPhotos([]));
    } finally {
        yield put(resultsActions.setLoadingFlag(false));
    }
}

export const resultsSagas = [
    takeLatest(resultsActions.getBreedPhotos, getPhotosSaga),
    takeLatest(resultsActions.getSubBreedPhotos, getSubBreedPhotosSaga)
]; 