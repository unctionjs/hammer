/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import hammer from "./index"

test(({same, end}) => {
  same(
    hammer(
      "attributes"
    )(
      {
        id: "1",
        attributes: {name: "Kurtis Rainbolt-Greene"},
      }
    ),
    {
      id: "1",
      name: "Kurtis Rainbolt-Greene",
    }
  )

  end()
})

test(({same, end}) => {
  same(
    hammer(
      "attributes"
    )(
      new Map([
        ["id", "1"],
        ["attributes", new Map([["name", "Kurtis Rainbolt-Greene"]])],
      ])
    ),
    new Map([
      ["id", "1"],
      ["name", "Kurtis Rainbolt-Greene"],
    ])
  )

  end()
})

test(({throws, end}) => {
  throws(
    () => hammer(
        "attributes"
      )(
        "a"
      )
  )

  end()
})
