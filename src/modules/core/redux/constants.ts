import { AsyncStateSlice } from '../interfaces';

export const initialAsyncState: AsyncStateSlice<null> = {
  loading: false,
  data: null,
  error: null,
};
