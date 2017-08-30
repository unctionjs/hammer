import keyChain from "@unction/keychain"
import exceptKey from "@unction/exceptkey"
import type from "@unction/type"
import isType from "@unction/istype"
import mergeRight from "@unction/mergeright"

export default function hammer (key: KeyType): Function {
  const keychain = keyChain([key])
  const omitKey = exceptKey(key)

  return function hammerKey (recordTree: RecordTreeType): RecordTreeType {
    if (!(isType("Object")(recordTree) || isType("Map")(recordTree))) {
      throw new Error(`hammer only works on an Record types, like Object or Map, but the subset was a ${type(recordTree)}`)
    }

    const only = keychain(recordTree)

    const without = omitKey(recordTree)

    return mergeRight(without)(only)
  }
}
