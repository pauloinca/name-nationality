import { screen, render, fireEvent } from "@testing-library/react";
import { rest } from "msw";

test("renders a text ", () => {
    render(<h2>Test</h2>);

    const h2El = screen.getByText("Test");

    expect(h2El).toBeInTheDocument();
});
