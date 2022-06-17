import { screen, render } from "@testing-library/react";

test("renders a text ", () => {
    render(<h1>Test</h1>);

    const h1El = screen.getByText("Test");

    expect(h1El).toBeInTheDocument();
});
