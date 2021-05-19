import { Router } from "express";
import { QuoteController } from "../controllers/quote.controller";

const quoteController = new QuoteController();

const routes = (router: Router): Router => {
  /* quote routes */
  router.get("/quote", quoteController.all);
  router.get("/quote/:id", quoteController.findById);
  router.post("/quote", quoteController.create);
  router.put("/quote", quoteController.update);
  router.delete("/quote/:id", quoteController.remove);
  router.get("/quote/count", quoteController.count);

  return router;
};

export default routes;
