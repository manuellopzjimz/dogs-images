import { createSlice, createAction } from '@reduxjs/toolkit'
import { State } from '@Search/types/state';

const initialState: State = {
    breeds: [],
    subBreeds: [],
    isLoading: false,
    selectedBreed: '',
    selectedSubbreed: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setLoadingFlag: (state: State, action: {payload: boolean}) => {
            state.isLoading = action.payload;
        },
        setBreeds: (state: State, action: {payload: string[]}) => {
            state.breeds = action.payload;
        },
        setSubBreeds: (state: State, action: {payload: string[]}) => {
            state.subBreeds = action.payload;
        },
        setSelection: (state: State, action: {payload: {breed: string, subBreed: string}}) => {
            state.selectedBreed = action.payload.breed;
            state.selectedSubbreed = action.payload.subBreed;
        }
    }
});

const getBreeds = createAction<void>('search/getBreeds');
const getSubBreeds = createAction<string>('search/getSubBreeds');

export const searchActions = {...searchSlice.actions, getBreeds, getSubBreeds};