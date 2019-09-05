import dig from "@unction/dig";
import exceptKey from "@unction/exceptkey";
import mergeRight from "@unction/mergeright";
import {KeyedEnumerableType} from "./types";

export default function hammer<A, B> (key: A) {
  return function hammerKey (keyedEnumerable: KeyedEnumerableType<B, A>): KeyedEnumerableType<B, A> {
    return mergeRight(exceptKey(key)(keyedEnumerable))(dig([key])(keyedEnumerable));
  };
}
