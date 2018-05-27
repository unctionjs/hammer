import dig from "@unction/dig"
import exceptKey from "@unction/exceptkey"
import mergeRight from "@unction/mergeright"

import type {UnaryFunctionType} from "types"
import type {KeyedEnumerableType} from "types"
import type {KeyType} from "types"

export default function hammer (key: KeyType): UnaryFunctionType {
  return function hammerKey (keyedEnumerable: KeyedEnumerableType): KeyedEnumerableType {
    return mergeRight(exceptKey(key)(keyedEnumerable))(dig([key])(keyedEnumerable))
  }
}
