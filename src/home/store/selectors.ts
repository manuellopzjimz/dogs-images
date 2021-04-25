import { State } from "@Home/types/app-state";

export const selectTheme = (state: State) => state.home.theme;
export const selectErrorFlag = (state: State) => state.home.isError;
export const selectErrorMessage = (state: State) => state.home.errorMessage;