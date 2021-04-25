import { HomeState } from "./home-state";
import { State as SearchState } from '@Search/types/state';
import { State as ResultsState } from '@DisplayResults/types/state';

export type State = {
    home: HomeState,
    search: SearchState,
    results: ResultsState
}