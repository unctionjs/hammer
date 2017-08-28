import keyChain from "@unction/keychain"
import {omit} from "ramda"
import {type} from "ramda"
import isIterable from "@unction/isfunctor"
import mergeRight from "@unction/mergeright"

export default function hammer (key: KeyType): Function {
  const keychain = keyChain([key])
  const omitKey = omit([key])

  return function hammerKey (functor: FunctorType): FunctorType {
    if (!isIterable(functor)) {
      throw new Error(`hammer only works on an Object or Array, but the set was a ${type(functor)}`)
    }

    const only = keychain(functor)
    const without = omitKey(functor)

    if (!isIterable(only)) {
      throw new Error(`hammer only works on an Object or Array, but the subset was a ${type(functor)}`)
    }

    return mergeRight(without)(only)
  }
}
