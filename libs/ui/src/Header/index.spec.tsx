import { render, screen } from "@testing-library/react-native";
import { Header } from "./index";

describe("Header", () => {
  it("renders header", () => {
    render(<Header text={"hello"} />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
