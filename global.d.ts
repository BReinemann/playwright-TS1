// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Index<> = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare interface IGenericObject<T = any> {
  [key: string]: Index
}