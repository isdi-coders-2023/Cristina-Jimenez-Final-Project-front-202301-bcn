import { paths } from "@/hooks/paths";
import { rest } from "msw";

const {
  users: {
    path,
    endpoints: { login },
  },
} = paths;

export const handlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${path}${login}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token: "mocken",
        })
      );
    }
  ),
];