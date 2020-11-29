import dig from "@unction/dig";
import exceptKey from "@unction/exceptkey";
import mergeRight from "@unction/mergeright";

export default function hammer<A, B> (key: A) {
  return function hammerKey (keyedEnumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
    return mergeRight(exceptKey(key)(keyedEnumerable))(dig([key])(keyedEnumerable));
  };
}
