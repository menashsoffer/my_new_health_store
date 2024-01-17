import { initTRPC } from '@trpc/server';
import { createContext } from './token/context';

const t = initTRPC.context<typeof createContext>().create();
export const publicProcedure = t.procedure;
export const router = t.router;
