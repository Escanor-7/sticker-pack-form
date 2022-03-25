import { render, screen, fireEvent } from "@testing-library/react";
import "jest";
import "@testing-library/jest-dom";

import { CheckboxInput } from "./index";

const checksMock = {
  title: 'React',
  value: 'react'
}

const mockComponent = () => {
  render(
    <CheckboxInput title={checksMock.title} />
  )
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

  it("Should select the react option", () => {
    mockComponent();

    const reactCheckbox = screen.getByRole('checkbox', { name: /react/i });

    expect(reactCheckbox).not.toBeChecked();

    fireEvent.click(reactCheckbox);

    expect(reactCheckbox).toBeChecked();
  });
})