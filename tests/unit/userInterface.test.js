import { expect, describe, it } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  // Check if current path matches href
  it("returns true if current path matches href exactly", () => {
    const href = "/";
    const currentPath = "/";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  // Check if root path is true when path is / or /index.html
  it("returns true for root path when path is / or /index.html", () => {
    const currentPath = "/";
    const root = "/index.html";
    const href = "/";
    const rootResult = isActivePath(href, currentPath);
    const hrefResult = isActivePath(href, root);

    expect(rootResult).toBe(true);
    expect(hrefResult).toBe(true);
  });

  // Check if current path includes the href
  it("returns true when current path includes the href", () => {
    const href = "/venue";
    const currentPath = "/venue/";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  // Check if paths don't match
  it("returns false when paths don't match", () => {
    const href = "/login";
    const currentPath = "/";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(false);
  });
});
