import { Api } from '../mapping/index';

export const service = new Api({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  baseApiParams: {
    credentials: 'include',
  },
});
