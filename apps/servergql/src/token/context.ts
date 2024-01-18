import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { checkToken } from './checkToken';

export const createContext = async (opts: CreateNextContextOptions) => {
  async function getUserFromHeader() {
    if (opts.req.headers.authorization) {
      const user = checkToken(opts.req.headers.authorization);
      return user;
    }
    return null;
  }
  const user = await getUserFromHeader();
  return {
    user,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
