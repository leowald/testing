import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Test from "../../src/components/Test";

describe("group", () => {
  it("should", () => {
    render(<Test />);
    screen.debug();
    expect(screen.queryByText("test")).toBeInTheDocument();
  });
});
