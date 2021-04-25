import React from "react";
import { Provider } from "react-redux";
import configureStore, { MockStoreCreator } from "redux-mock-store";

import { State } from "@Search/types/state";
import { SearchFormComponent } from "@Search/components/SearchForm";
import { fireEvent, render } from "@testing-library/react";

describe("SearchFormComponent", () => {
  let mockStore: MockStoreCreator<{
    search: Partial<State>;
  }>;

  beforeAll(() => {
    mockStore = configureStore([]);
  });

  it("should not dispatch an action if form is not valid", () => {
    const store = mockStore({
      search: {
        breeds: [],
        subBreeds: [],
        isLoading: true,
        selectedBreed: "",
        selectedSubbreed: "",
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <SearchFormComponent />
      </Provider>
    );

    fireEvent.click(getByText("search"));

    expect(store.getActions()).toHaveLength(0);
  });

  it("should dispatch an action if form is valid", () => {
    const store = mockStore({
      search: {
        breeds: ["bulldog"],
        subBreeds: [],
        isLoading: false,
        selectedBreed: "",
        selectedSubbreed: "",
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <SearchFormComponent />
      </Provider>
    );

    fireEvent.click(getByText("searchBreed"));

    fireEvent.click(getByText("bulldog"));

    expect(store.getActions()).toHaveLength(1);
  });
});
