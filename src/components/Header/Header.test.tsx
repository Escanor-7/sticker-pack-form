import { render, screen, cleanup } from "@testing-library/react";
import "jest";
import "@testing-library/jest-dom";

import { Header } from "./index";

const mockComponent = () => {
  render(<Header
    title="Formulário"
    description="para compra de"
    subtitle="Pacote de adesivos"
  />)
}

describe('Header component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup
  });

  it("Should render the component", () => {
    mockComponent();

    const headerContainer = screen.getByTestId(/header-container/i);
    expect(headerContainer).toBeInTheDocument();
  });

  it("Should display main title", () => {
    mockComponent();

    const formTitle = screen.getByRole('heading', { name: /formulário/i });
    expect(formTitle).toBeInTheDocument();
  });

  it("Should display box icon", () => {
    mockComponent();

    const formTitle = screen.getByTestId('box-icon');
    expect(formTitle).toBeInTheDocument();
  });
})