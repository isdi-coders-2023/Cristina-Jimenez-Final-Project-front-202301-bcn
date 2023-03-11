import { screen } from "@testing-library/react";
import Modal from "../../src/components/Modal/Modal";
import { mockErrorUiState } from "../../src/mocks/storeMocks/uiStoreMocks";
import { showErrorToast } from "../../src/modals/modals";
import renderWithProviders from "../../src/utils/testUtils/renderWithProviders";

jest.mock("../../src/modals/modals", () => ({
  showErrorToast: jest.fn(),
}));

describe("Given the Modal component", () => {
  describe("When it renders with an error and the message 'Invalid Credentials'", () => {
    test("Then it should call showErrorToast component with that error message", () => {
      const expectedMessage = "Invalid credentials";

      renderWithProviders(<Modal />, { ui: mockErrorUiState });

      expect(showErrorToast).toHaveBeenCalledWith(expectedMessage);
    });
  });
});