import { useTranslation } from "react-i18next";
import React from "react";
import { useSelector } from "react-redux";

import {
  selectLoadingFlag,
  selectPhotos,
} from "@DisplayResults/store/selectors";
import { selectSelectedBreed } from "@Search/store/selectors";
import { Image } from "../Image";
import { Loading } from "../Loading";
import { Container, Label } from "./style";

export const Grid = () => {
  const { t } = useTranslation("results");
  const isLoading = useSelector(selectLoadingFlag);
  const photos = useSelector(selectPhotos);
  const selectedBreed = useSelector(selectSelectedBreed);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Label>{t("numberOfResults", { count: photos.length })}</Label>
      <Container>
        {photos.map((photo: string, index: number) => (
          <Image
            key={index}
            url={photo}
            alternativeText={t("alternativeTextPhoto", {
              number: index,
              breed: selectedBreed,
            })}
          />
        ))}
      </Container>
    </>
  );
};
