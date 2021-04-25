import { homeActions } from "@Home/store";
import { selectErrorFlag, selectErrorMessage } from "@Home/store/selectors";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./style";

export const Snackbar = () => {
  const isError = useSelector(selectErrorFlag);
  const errorMessage = useSelector(selectErrorMessage);
  const { t } = useTranslation("home");
  const dispatch = useDispatch();

  useEffect(() => {
    let timeout = setTimeout(() => {
      dispatch(homeActions.resetError());
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isError, errorMessage]);

  return isError ? (
    <Container isVisible={isError}>{t(errorMessage)}</Container>
  ) : null;
};
