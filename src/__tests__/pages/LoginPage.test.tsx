import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import mockRouter from "next-router-mock";
import { mockLoggedUserState } from "../../mocks/storeMocks/storeMocks";
import LoginPage from "../../pages/login";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

const spyRouter = jest.spyOn(mockRouter, "push");

beforeAll(() => jest.resetAllMocks());

describe("Given the LoginPage component", () => {
  describe("When rendered", () => {
    test("Then it should render the page title 'Log in' on a heading", () => {
      const expectedLoginPageTitle = "Log in";

      renderWithProviders(<LoginPage />);

      const loginPageTitle = screen.getByRole("heading", {
        name: expectedLoginPageTitle,
      });

      expect(loginPageTitle).toBeInTheDocument();
    });
  });

  describe("When the user enters a wrong username and password, and clicks on Sign in button", () => {
    beforeEach(() => server.use(...errorHandlers));

    test("Then it should render the modal component with error message 'Invalid credentials'", async () => {
      const userCredentials = {
        username: "Manolito",
        password: "manolo1234",
      };

      const passwordLabel = "Password";
      const usernameLabel = "Username";
      const signInButtonText = "Sign in";

      const expectedMessage = "Invalid credentials";

      renderWithProviders(<LoginPage />);

      const usernameField = screen.getByLabelText(usernameLabel);
      const passwordField = screen.getByLabelText(passwordLabel);
      const signInButton = screen.getByRole("button", {
        name: signInButtonText,
      });

      await userEvent.type(usernameField, userCredentials.username);
      await userEvent.type(passwordField, userCredentials.password);
      await userEvent.click(signInButton);

      const modal = await screen.findByText(expectedMessage);

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When the user is logged", () => {
    test("Then it should redirect to home page", () => {
      renderWithProviders(<LoginPage />, { user: mockLoggedUserState });

      expect(spyRouter).toHaveBeenCalledWith("/");
    });
  });
});
