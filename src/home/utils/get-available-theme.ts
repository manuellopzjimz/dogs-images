import { ThemeOption } from "@Home/types/theme-option";

export const getAvailableTheme = (currentTheme: ThemeOption): ThemeOption => currentTheme === 'light' ? 'dark' : 'light';