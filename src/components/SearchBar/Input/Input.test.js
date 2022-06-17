import { screen, render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

test("renders input and change its text value", () => {
    const setSearch = jest.fn();

    render(<Input setSearch={setSearch} />);

    const inputEl = screen.getByRole("textbox");

    fireEvent.change(inputEl, { target: { value: "test123" } });

    expect(inputEl).toBeInTheDocument();
    expect(inputEl.value).toBe("test123");
});
