import { router } from "../trpc";
import { exampleRouter } from "./example";
import { itemRouter } from "./itemRouter";

export const appRouter = router({
  example: exampleRouter,
  item: itemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
