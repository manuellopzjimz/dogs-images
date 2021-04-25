import React from "react";
import { Header } from "@Home/components/Header";
import { render } from "@testing-library/react";

describe("HeaderComponent", () => {
  it("should be rendered correctly", () => {
    const { container } = render(
      <Header>
        <div>Left content</div>
        <div>Right content</div>
      </Header>
    );

    expect(container).toMatchSnapshot();
  });
});
