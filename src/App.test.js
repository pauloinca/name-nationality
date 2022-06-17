import { render, screen } from "@testing-library/react";
import App from "./App";
import { Button } from "./components/SearchBar/Button/Button";
import { Input } from "./components/SearchBar/Input/Input";

test("renders the app with an input and a button", () => {
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
