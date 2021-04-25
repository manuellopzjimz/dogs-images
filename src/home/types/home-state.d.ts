import { ThemeOption } from "./theme-option";

export type HomeState = {
    theme: ThemeOption,
    isError: boolean;
    errorMessage: string;
}