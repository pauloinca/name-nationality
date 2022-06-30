import { render, screen } from "@testing-library/react";
import { Button } from "./components/SearchBar/Button/Button";
import { Input } from "./components/SearchBar/Input/Input";
import { rest } from "msw";

const response = { name: "test name", country: ["test country1", "test country2"] };

const server = setupServer(
    rest.get("127.0.0.1", (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

test("calls api on startup and renders it response", async () => {
    render(<App />);

    const quoteEl = await screen.findByText(/test quote/i);

    expect(quoteEl).toBeInTheDocument();
});
