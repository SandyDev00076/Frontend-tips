import { getGenreLinks } from "./GenreLinks";

describe("getGenreLinks", () => {
  it("should return links if the genre is present", () => {
    expect(getGenreLinks("images")).toHaveLength(1);
  });
  it("should not return links if the genre is absent", () => {
    expect(getGenreLinks("abc")).toBe(undefined);
  });
});
