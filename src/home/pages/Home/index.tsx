import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Header } from "@Home/components/Header";
import { Container, ChangeTheme, Logo } from "./style";
import { selectTheme } from "@Home/store/selectors";
import { getAvailableTheme } from "@Home/utils/get-available-theme";
import { SearchFormComponent } from "@Search/components/SearchForm";
import { Grid } from "@DisplayResults/components/Grid";
import { Snackbar } from "@Home/components/Snackbar";
import light from "@Home/theme/light.json";
import dark from "@Home/theme/dark.json";
import { homeActions } from "@Home/store";

export const Home = () => {
  const { t } = useTranslation("home");
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Container>
        <Header>
          <Logo
            src="https://dog.ceo/img/dog-api-logo.svg"
            alt={t("logoAlternativeText")}
          />
          <ChangeTheme
            onClick={() =>
              dispatch(homeActions.changeTheme(getAvailableTheme(theme)))
            }
          >
            {t("changeTheme", { availableTheme: getAvailableTheme(theme) })}
          </ChangeTheme>
        </Header>
        <SearchFormComponent />
        <Grid />
        <Snackbar />
      </Container>
    </ThemeProvider>
  );
};
