import express, {
  Express,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import http, { Server } from "http";
import cors from "cors";
import routes from "./routes";
import ErrorMiddleware from "./middlewares/error.middleware";
import mongoose from "mongoose";

interface IAppService {
  app: Express;
  config(): void;
  start(): {
    server: Server;
  };
}

const appService = (): IAppService => {
  const app = express();

  const config = (): void => {
    mongoose
      .connect(process.env.DB_URL!, {
        dbName: process.env.DB_NAME!,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutMS: 3600000,
        connectTimeoutMS: 3600000,
        keepAlive: true,
      })
      .then(
        () => {
          app.use(function (
            err: any,
            req: Request,
            res: Response,
            next: NextFunction
          ) {
            console.error("ERROR IS ", err);
            next(err);
          });
        },
        (err) => {
          console.log(err);
        }
      );

    app.use(
      cors({
        origin: [process.env.FRONTEND_URI as string],
      })
    );

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use("/api", routes(Router({ caseSensitive: true })));
    app.use(ErrorMiddleware.use);
  };

  const start = () => {
    config();

    return {
      server: http
        .createServer(app)
        .listen(
          Number(process.env.BACKEND_HTTP_PORT),
          process.env.BACKEND_HTTP_HOST
        ),
    };
  };

  return { app, config, start };
};

export default appService();
