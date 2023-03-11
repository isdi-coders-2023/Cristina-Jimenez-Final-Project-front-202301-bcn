import { rest } from "msw";
import { paths } from "../hooks/paths";

const {
  users: {
    path,
    endpoints: { login },
  },
} = paths;

export const handlers = [
  rest.post(
    `https://cristina-jimenez-final-project-202301-bcn.onrender.com/users/login`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token: "mocken",
        })
      );
    }
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API!}${path}${login}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Wrong credentials",
        })
      );
    }
  ),
];
