import { render, screen, fireEvent } from "@testing-library/react";
import "jest";
import "@testing-library/jest-dom";

import { CheckboxInput } from "./index";

const mockComponent = () => {
  render(<CheckboxInput />)
}

describe('CheckboxInput component', () => {
  it("Should render the component", () => {
    mockComponent();

    const container = screen.getByTestId(/checkbox-input-container/i);
    expect(container).toBeInTheDocument();
  });

  it("Should display react option", () => {
    mockComponent();

    const reactOption = screen.getByLabelText(/react/i);

    expect(reactOption).toBeInTheDocument();
  });

  it("Should display vue option", () => {
    mockComponent();

    const vueOption = screen.getByLabelText(/vue/i);

    expect(vueOption).toBeInTheDocument();
  });

  it("Should display angular option", () => {
    mockComponent();

    const angularOption = screen.getByLabelText(/angular/i);

    expect(angularOption).toBeInTheDocument();
  });

  it("Should select the react option", () => {
    mockComponent();

    const reactCheckbox = screen.getByRole('checkbox', { name: /react/i });

    expect(reactCheckbox.ariaChecked).toEqual("false");

    fireEvent.click(reactCheckbox);

    expect(reactCheckbox.ariaChecked).toEqual("true");
  });

  it("Should select the vue option", () => {
    mockComponent();

    const vueCheckbox = screen.getByRole('checkbox', { name: /vue/i });

    expect(vueCheckbox.ariaChecked).toEqual("false");

    fireEvent.click(vueCheckbox);

    expect(vueCheckbox.ariaChecked).toEqual("true");
  });

  it("Should select the angular option", () => {
    mockComponent();

    const angularCheckbox = screen.getByRole('checkbox', { name: /angular/i });

    expect(angularCheckbox.ariaChecked).toEqual("false");

    fireEvent.click(angularCheckbox);

    expect(angularCheckbox.ariaChecked).toEqual("true");
  });
})