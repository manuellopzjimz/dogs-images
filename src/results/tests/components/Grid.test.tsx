import React from "react";
import { Provider } from "react-redux";
import configureStore, { MockStoreCreator } from "redux-mock-store";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "intersection-observer";

import { Grid } from "@DisplayResults/components/Grid";
import { render } from "@testing-library/react";
import { State } from "@DisplayResults/types/state";
import { State as SearchState } from "@Search/types/state";

describe("GridComponent", () => {
  let mockStore: MockStoreCreator<{
    results: Partial<State>;
    search: Partial<SearchState>;
  }>;

  beforeAll(() => {
    mockStore = configureStore([]);
    i18n.use(initReactI18next).init({
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          results: {
            numberOfResults: "We have found {{count}} photo",
            numberOfResults_plural: "We have found {{count}} photos",
            alternativeTextPhoto: "Photo number {{number}} of {{breed}}",
          },
        },
      },
    });
  });

  it("should display the list of elements correctly", () => {
    const store = mockStore({
      results: {
        photos: [
          "https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg",
          "https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg",
          "https://images.dog.ceo/breeds/affenpinscher/n02110627_10225.jpg",
          "https://images.dog.ceo/breeds/affenpinscher/n02110627_10437.jpg",
        ],
        isLoading: false,
      },
      search: {
        selectedBreed: "affenpinscher",
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );

    expect(getByText("We have found 4 photos"));
  });

  it("should display singular sentence if only one photo could be retrieved", () => {
    const store = mockStore({
      results: {
        photos: [
          "https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg",
        ],
        isLoading: false,
      },
      search: {
        selectedBreed: "affenpinscher",
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );

    expect(getByText("We have found 1 photo"));
  });
});
