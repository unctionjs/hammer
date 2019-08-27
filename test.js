
import hammer from "./";

test("hammer with Object", () => {
  expect(
    hammer(
      "attributes"
    )(
      {
        id: "1",
        attributes: {name: "Kurtis Rainbolt-Greene"},
      }
    )
  ).toEqual(
    {
      id: "1",
      name: "Kurtis Rainbolt-Greene",
    }
  );
});

test("hammer with Map", () => {
  expect(
    hammer(
      "attributes"
    )(
      new Map([
        ["id", "1"],
        ["attributes", new Map([["name", "Kurtis Rainbolt-Greene"]])],
      ])
    )
  ).toEqual(
    new Map([
      ["id", "1"],
      ["name", "Kurtis Rainbolt-Greene"],
    ])
  );
});
