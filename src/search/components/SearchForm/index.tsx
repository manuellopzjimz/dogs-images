import React, { useEffect } from "react";
import { useForm, Controller, FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "@Search/types/form";
import { StyledForm, SelectContainer } from "./style";
import { SearchValidator } from "@Search/validators/search";
import { Button } from "../Button";
import { Select } from "../Select";
import {
  areBreedsAlreadyRequested as areBreedsAlreadyRequestedSelector,
  selectBreeds,
  selectSubBreeds,
} from "@Search/store/selectors";
import { searchActions } from "@Search/store";
import { resultsActions } from "@DisplayResults/store";

export const SearchFormComponent = () => {
  const { t } = useTranslation("search");
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<Form>({
    defaultValues: {
      breed: "",
      subBreed: "",
    },
    resolver: yupResolver(SearchValidator),
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const areBreedsAlreadyRequested = useSelector(
    areBreedsAlreadyRequestedSelector
  );
  const breeds = useSelector(selectBreeds);
  const subBreeds = useSelector(selectSubBreeds);

  useEffect(() => {
    if (!areBreedsAlreadyRequested) {
      dispatch(searchActions.getBreeds());
    }
  }, []);

  const onSubmit = (form: Form) => {
    dispatch(searchActions.setSelection(form));
    if (form.subBreed) {
      dispatch(resultsActions.getSubBreedPhotos(form));
    } else {
      dispatch(resultsActions.getBreedPhotos(form.breed));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <SelectContainer>
        <Controller
          control={control}
          name="breed"
          render={({ field }: any) => (
            <Select
              onSelect={(breed: string) => {
                field.onChange(breed);
                setValue("subBreed", "");
                dispatch(searchActions.getSubBreeds(breed));
              }}
              placeholder={t("searchBreed")}
              options={breeds.map((breed: string) => ({
                name: breed,
                value: breed,
              }))}
              value={field.value}
              onBlur={field.onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="subBreed"
          render={({ field }: any) => (
            <Select
              onSelect={field.onChange}
              placeholder={t("searchSubBreed")}
              options={subBreeds.map((breed: string) => ({
                name: breed,
                value: breed,
              }))}
              value={field.value}
              onBlur={field.onBlur}
            />
          )}
        />
      </SelectContainer>
      <Button isDisable={!isValid} value={t("search") as string} />
    </StyledForm>
  );
};
