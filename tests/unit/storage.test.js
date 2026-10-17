import { expect, describe, it, beforeEach } from "vitest";
import { getUsername, saveUser } from "../../js/utils/storage.js";

describe("storage functions", () => {
  // Mock storage
  beforeEach(() => {
    const storage = {};

    globalThis.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });
  describe("saveUser", () => {
    it("saves a user object to localStorage", () => {
      const user = {
        data: { name: "test", email: "test@stud.noroff.no", psw: "secretpsw" },
      };
      saveUser(user);
      expect(localStorage.getItem("user")).toBe(JSON.stringify(user));
    });
  });
  // Return name from user object in storage
  describe("getUsername", () => {
    it("returns username from user object in storage", () => {
      const user = {
        data: { name: "test", email: "test@stud.noroff.no", psw: "secretpsw" },
      };
      saveUser(user);
      const retrievedUsername = getUsername();
      expect(retrievedUsername).toBe("test");
    });

    // Return null if no user exists
    it("returns null if no user exists", () => {
      const retrieveUsername = getUsername();
      expect(retrieveUsername).toBeNull();
    });
  });
});
