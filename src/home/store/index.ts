import { resultsSlice } from '@DisplayResults/store';
import { HomeState } from '@Home/types/home-state';
import { ThemeOption } from '@Home/types/theme-option';
import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'
import { searchSlice } from '@Search/store';
import createSagaMiddleware from "redux-saga";
import saga from './saga';

const initialState: HomeState = {
    theme: 'light',
    isError: false,
    errorMessage: ''
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        changeTheme: (state: HomeState, action: {payload: ThemeOption}) => {
            state.theme = action.payload;
        },
        setError: (state: HomeState, action: {payload: {isError: boolean, errorMessage: string}}) => {
            state.isError = action.payload.isError;
            state.errorMessage = action.payload.errorMessage;
        },
        resetError: (state: HomeState) => {
            state.isError = false;
            state.errorMessage = '';
        }
    }
})

export const homeActions = homeSlice.actions;

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
        search: searchSlice.reducer,
        results: resultsSlice.reducer
    },
    middleware
});

sagaMiddleware.run(saga);


export default store;