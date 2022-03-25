import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "jest";
import "@testing-library/jest-dom";

import { StickerPackForm } from "./index";


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

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

    expect(checkOptions.length).toEqual(numberOfOptions);
  });

  it("Should show the amount of stickers ", () => {
    const initialValue = "0";
    mockComponent();

    const stickerQuantityBlock = screen.getByTestId('quantity_of_stickers');

    expect(stickerQuantityBlock).toHaveValue(initialValue);
  });

  it("Should activate the button to subtract the value of the stickers", () => {
    mockComponent();

    const initialValue = "0";
    const minusButton = screen.getByTestId("minus-button");

    const stickerQuantityBlock = screen.getByTestId('quantity_of_stickers');
    expect(stickerQuantityBlock).toHaveValue(initialValue);
    stickerQuantityBlock.nodeValue = "1";

    fireEvent.click(minusButton);

    expect(stickerQuantityBlock).toHaveValue(initialValue);
  });

  it("Should add 1 more stickers to the quantity block after clicking the plus button", () => {
    mockComponent();
    const initialValue = "0";
    const addedValue = "1";
    const plusButton = screen.getByTestId("plus-button")
    const stickerQuantityBlock = screen.getByTestId('quantity_of_stickers');

    expect(stickerQuantityBlock).toHaveValue(initialValue);
    expect(stickerQuantityBlock).not.toHaveValue(addedValue);

    fireEvent.click(plusButton);

    expect(stickerQuantityBlock).not.toHaveValue(initialValue);
    expect(stickerQuantityBlock).toHaveValue(addedValue);
  });

  it("Should show note entry for questions or message", () => {
    mockComponent();

    const textArea = screen.getByTestId("textarea");

    expect(textArea).toBeInTheDocument();
  });

  it("Should call the data submit function", () => {
    mockComponent();
    const submitButton = screen.getByRole('button', { name: /enviar/i })

    expect(submitButton).toBeInTheDocument();
  });
})