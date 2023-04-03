import { query$ } from "@prpc/solid";
import { z } from "zod";
import { withRateLimit } from "~/server/withRateLimit";
  
export const helloQuery = query$(
  ({ payload }) => {
    return `server says hello: ${payload.name}`;
  },
  "hello",
  z.object({ name: z.string() }),
  withRateLimit
);
