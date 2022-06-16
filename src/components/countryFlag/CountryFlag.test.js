import { screen, render } from "@testing-library/react";
import { CountryFlag } from "./CountryFlag";

test("renders an img ", () => {
    render(<CountryFlag />);

    const imageEl = screen.getByRole("img");

    expect(imageEl).toBeInTheDocument();
});
