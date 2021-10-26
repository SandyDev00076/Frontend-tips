import {
  getIDFromGenre,
  getRandomArbitrary,
  prepareURL,
  truncateURL,
} from "utils";

describe("getRandomArbitrary", () => {
  it("should not be less than min", () => {
    expect(getRandomArbitrary(1, 5)).toBeGreaterThan(0);
  });
  it("should not be greater than max", () => {
    expect(getRandomArbitrary(1, 5)).toBeLessThan(6);
  });
});

describe("getIDFromGenre", () => {
  it("should handle all the spaces", () => {
    expect(getIDFromGenre("some popular genre")).toBe("some-popular-genre");
  });
});

describe("prepareURL", () => {
  it("should append http:// when necessary", () => {
    expect(prepareURL("abc.com")).toBe("http://abc.com");
  });
  it("should not do anything when http:// already present", () => {
    expect(prepareURL("http://abc.com")).toBe("http://abc.com");
  });
});

describe("truncateURL", () => {
  it("should truncate http:// when necessary", () => {
    expect(truncateURL("http://abc.com")).toBe("abc.com");
  });
  it("should also truncate the trailing slash", () => {
    expect(truncateURL("http://abc.com/")).toBe("abc.com");
  });
});
