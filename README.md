# @unction/hammer

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> A => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string

Use this to de-nest a nested keyed enumerable.

``` javascript
const payload = {
  id: 1
  attributes: {
    name: "Kurtis Rainbolt-Greene",
    age: 26
  }
}

hammer("attributes")(payload)
```

Which returns:

``` javascript
{
  id: 1,
  name: "Kurtis Rainbolt-Greene",
  age: 26
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/hammer.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/hammer.svg?maxAge=2592000&style=flat-square
