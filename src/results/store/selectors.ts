import { State } from "@Home/types/app-state";

export const selectPhotos = (state: State) => state.results.photos;
export const selectLoadingFlag = (state: State) => state.results.isLoading;