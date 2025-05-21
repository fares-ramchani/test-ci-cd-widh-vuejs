import { Api } from '../mapping/index';

export const service = new Api({
  baseUrl: 'http://145.239.198.96:3005',
  baseApiParams: {
    credentials: 'include',
  },
});
