import App from "./App";
import { render, screen } from "@testing-library/react-native";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    expect(screen.getByText("Hello Cypress")).toBeTruthy();
  });
});
