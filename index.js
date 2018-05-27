import dig from "@unction/dig";
import exceptKey from "@unction/exceptkey";
import mergeRight from "@unction/mergeright";
export default function hammer(key) {
  return function hammerKey(keyedEnumerable) {
    return mergeRight(exceptKey(key)(keyedEnumerable))(dig([key])(keyedEnumerable));
  };
}
