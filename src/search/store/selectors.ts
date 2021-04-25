import { State } from "@Home/types/app-state";

export const areBreedsAlreadyRequested = (state: State) => state.search.isLoading || state.search.breeds.length > 0;
export const selectBreeds = (state: State) => state.search.breeds;
export const selectSubBreeds = (state: State) => state.search.subBreeds;
export const selectSelectedBreed = (state: State) => state.search.selectedSubbreed !== '' ? state.search.selectedSubbreed : state.search.selectedBreed;