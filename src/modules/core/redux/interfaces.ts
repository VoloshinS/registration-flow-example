export interface AsyncStateSlice<T> {
  loading: boolean;
  data: T;
  error: null | string;
}
