import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Import your Button component
import { Button } from "../src/button";

// Mock the alert function
vi.spyOn(window, "alert").mockImplementation(() => {});

describe("Button", () => {
  // Clear mock calls between tests
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with children", () => {
    render(<Button appName="test">Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("displays alert with correct app name when clicked", () => {
    render(<Button appName="UI">Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Hello from your UI app!");
  });

  it("displays alert with different app name when changed", () => {
    render(<Button appName="Web">Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Hello from your Web app!");
  });

  it("applies custom className correctly", () => {
    render(
      <Button appName="test" className="custom-button">
        Custom Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /custom button/i });

    expect(button.className).toBe("custom-button");
  });
});
