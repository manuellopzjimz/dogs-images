import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore, { MockStoreCreator } from "redux-mock-store";

import { Snackbar } from "@Home/components/Snackbar";
import { HomeState } from "@Home/types/home-state";

describe("SnackbarComponent", () => {
  let mockStore: MockStoreCreator<{ home: Partial<HomeState> }>;

  beforeAll(() => {
    mockStore = configureStore([]);
  });

  it("should display an error message correctly", () => {
    const store = mockStore({
      home: {
        isError: true,
        errorMessage: "An error occurred processing your request",
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <Snackbar />
      </Provider>
    );

    expect(getByText("An error occurred processing your request")).toBeTruthy();
  });

  it("should not be displayed if there is no error", () => {
    const store = mockStore({
      home: {
        isError: false,
        errorMessage: "",
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <Snackbar />
      </Provider>
    );

    expect(() => getByText("")).toThrowError();
  });
});
