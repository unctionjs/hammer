import keyChain from "@unction/keychain"
import exceptKey from "@unction/exceptkey"
import type from "@unction/type"
import isType from "@unction/istype"
import mergeRight from "@unction/mergeright"

import type {UnaryFunctionType} from "types"
import type {RecordTreeType} from "types"
import type {KeyType} from "types"

export default function hammer (key: KeyType): UnaryFunctionType {
  return function hammerKey (recordTree: RecordTreeType): RecordTreeType {
    if (!(isType("Object")(recordTree) || isType("Map")(recordTree))) {
      throw new Error(`hammer only works on an Record types, like Object or Map, but the subset was a ${type(recordTree)}`)
    }

    return mergeRight(exceptKey(key)(recordTree))(keyChain([key])(recordTree))
  }
}
