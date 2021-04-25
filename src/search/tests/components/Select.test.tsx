import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Select } from "@Search/components/Select";
import "@testing-library/jest-dom/extend-expect";

describe("SelectComponent", () => {
  it("should render correctly even though there is no data", () => {
    const { getByText } = render(
      <Select
        onSelect={jest.fn}
        onBlur={jest.fn()}
        placeholder="Please select an item"
        options={[]}
      />
    );

    expect(getByText("Please select an item")).toBeInTheDocument();
  });

  it("should render a list of items when it is clicked", () => {
    const { getByText } = render(
      <Select
        onSelect={jest.fn}
        onBlur={jest.fn()}
        placeholder="Please select an item"
        options={[
          { value: "Test", name: "Test" },
          { value: "Test2", name: "Test2" },
        ]}
      />
    );

    fireEvent.click(getByText("Please select an item"));

    expect(getByText("Test")).toBeInTheDocument();
    expect(getByText("Test2")).toBeInTheDocument();
  });

  it("should be able to propagate selection", () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <Select
        onSelect={onSelect}
        onBlur={jest.fn()}
        placeholder="Please select an item"
        options={[
          { value: "Test", name: "Test" },
          { value: "Test2", name: "Test2" },
        ]}
      />
    );

    fireEvent.click(getByText("Please select an item"));
    fireEvent.click(getByText("Test"));

    expect(onSelect).toHaveBeenCalledWith("Test");
    expect(() => getByText("Test")).toThrowError();
    expect(() => getByText("Test2")).toThrowError();
  });

  it("should not display items if it is not clicked", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Select
        onSelect={onChange}
        onBlur={jest.fn()}
        placeholder="Please select an item"
        options={[
          { value: "Test", name: "Test" },
          { value: "Test2", name: "Test2" },
        ]}
      />
    );

    expect(() => getByText("Test")).toThrowError();
    expect(() => getByText("Test2")).toThrowError();
  });
});
