type IsEqual<X, Y, A = true, B = false> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? A
  : B
type GetReadonlyKeys<T> = {
  [P in keyof T]-?: IsEqual<
    { [O in P]: T[P] },
    { -readonly [O in P]: T[P] },
    never,
    P
  >
}[keyof T]