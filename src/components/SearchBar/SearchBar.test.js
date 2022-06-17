import { screen, render } from "@testing-library/react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

test("renders an input and a button", () => {
    render(
        <div>
            <Input type="text" />
            <Button>Test</Button>
        </div>
    );

    const buttonEl = screen.getByText("Test");
    const inputEl = screen.getByRole("textbox");

    expect(buttonEl).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
});
