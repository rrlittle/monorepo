import { render } from "@testing-library/react-native";
import { Header } from "./index";

describe("Header", () => {
  it("renders header", () => {
    const { getByText } = render(<Header text={"hello"} />);
    expect(getByText("hello")).toBeTruthy();
  });
});
