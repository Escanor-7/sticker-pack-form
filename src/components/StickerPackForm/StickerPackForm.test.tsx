import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "jest";
import "@testing-library/jest-dom";

import { StickerPackForm } from "./index";

const mockComponent = () => {
  render(<StickerPackForm />)
}

describe('StickerPackForm component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup
  });

  it("Should render the component", () => {
    mockComponent();

    const container = screen.getByTestId(/sticker-pack-form-container/i);
    expect(container).toBeInTheDocument();
  });

  it("Should show the amount of checkbox options", () => {
    const numberOfOptions = 3;
    mockComponent();

    const checkOptions = screen.getAllByRole('checkbox');

    expect(checkOptions).toEqual(numberOfOptions);
  });

  it("Should show the amount of stickers ", () => {
    const initialValue = "0";
    mockComponent();

    const stickerQuantityBlock = screen.getByTestId('quantity-of-stickers').nodeValue = initialValue;

    expect(stickerQuantityBlock).toBeInTheDocument();
  });

  it("Should activate the button to subtract the value of the stickers", () => {
    const initialValue = "0";
    const mockFunction = jest.fn();
    const minusButton = screen.getByRole('button', { name: "minus-button" })
    mockComponent();

    fireEvent.click(minusButton);

    expect(mockFunction).toHaveBeenCalled();
    expect(screen.findByDisplayValue(initialValue)).toBeInTheDocument();
  });

  it("Should add 1 more stickers to the quantity block after clicking the plus button", () => {
    const initialValue = "0";
    const addedValue = "1";
    const mockFunction = jest.fn();
    const plusButton = screen.getByRole('button', { name: "plus-button" })
    const stickerQuantityBlock = screen.getByTestId('quantity-of-stickers');
    mockComponent();

    expect(stickerQuantityBlock).toHaveTextContent(initialValue);
    expect(stickerQuantityBlock).not.toHaveTextContent(addedValue);

    fireEvent.click(plusButton);

    expect(mockFunction).toHaveBeenCalled();
    expect(screen.findByDisplayValue(initialValue)).not.toBeInTheDocument();
    expect(screen.findByDisplayValue(addedValue)).toBeInTheDocument();
  });

  it("Should show note entry for questions or message", () => {
    mockComponent();

    const textArea = screen.getByRole('textbox');

    expect(textArea).toBeInTheDocument();
  });

  it("Should call the data submit function", () => {
    const handleSubmitMockFunction = jest.fn();
    const submitButton = screen.getByRole('button', { name: /enviar/i })

    mockComponent();

    fireEvent.click(submitButton);

    expect(handleSubmitMockFunction).toBeCalled();
  });
})