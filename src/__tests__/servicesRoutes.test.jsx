import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import App from "../App";
import { afterAll, beforeAll } from "vitest";

let originalMatchMedia;
let originalScrollTo;

beforeAll(() => {
  originalMatchMedia = window.matchMedia;
  originalScrollTo = window.scrollTo;

  window.matchMedia = window.matchMedia ?? (() => ({
    matches: false,
    media: "",
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }));

  window.scrollTo = () => {};
});

afterAll(() => {
  window.matchMedia = originalMatchMedia;
  window.scrollTo = originalScrollTo;
});

function InquireRouteHarness() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/inquire?offer=brand-audit")}>
        Switch offer
      </button>
      <App />
    </>
  );
}

describe("services routes", () => {
  it("renders the services page", () => {
    render(
      <MemoryRouter initialEntries={["/services"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/products \+ services/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /brand architect/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the inquiry page with the selected offer", () => {
    render(
      <MemoryRouter initialEntries={["/inquire?offer=manifest-method"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /start the conversation/i })
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("Manifest Method")).toBeInTheDocument();
  });

  it("updates the selected offer field when the inquiry query param changes", () => {
    render(
      <MemoryRouter initialEntries={["/inquire?offer=manifest-method"]}>
        <InquireRouteHarness />
      </MemoryRouter>
    );

    const offerField = screen.getByLabelText("Selected offer");
    expect(offerField).toHaveValue("Manifest Method");

    fireEvent.click(screen.getByRole("button", { name: /switch offer/i }));

    expect(screen.getByLabelText("Selected offer")).toHaveValue("Brand Audit");
  });
});
