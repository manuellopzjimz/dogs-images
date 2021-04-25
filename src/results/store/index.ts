import { createSlice, createAction } from '@reduxjs/toolkit'
import { State } from '@DisplayResults/types/state';

const initialState: State = {
    isLoading: false,
    photos: []
}

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setLoadingFlag: (state: State, action: {payload: boolean}) => {
            state.isLoading = action.payload;
        },
        setPhotos: (state: State, action: {payload: string[]}) => {
            state.photos = action.payload;
        }
    }
});

const getBreedPhotos = createAction<string>('results/getBreedPhotos');
const getSubBreedPhotos = createAction<{breed: string, subBreed: string}>('results/getSubBreedPhotos')

export const resultsActions = {...resultsSlice.actions, getBreedPhotos, getSubBreedPhotos};