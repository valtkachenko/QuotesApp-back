import { NextFunction, Request, Response } from "express";
import { QuoteService } from "../services/quote.service";

export class QuoteController {
  private readonly quoteService: QuoteService;

  constructor() {
    this.quoteService = new QuoteService();
  }

  public all = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quotes = await this.quoteService.findAll();
      res.send(quotes);
    } catch (e) {
      next(e);
    }
  };

  public findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.quoteService.findById(id);

      res.send(data);
    } catch (e) {
      next(e);
    }
  };

  public remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.quoteService.remove(id);

      res.send(data);
    } catch (e) {
      next(e);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const data = await this.quoteService.update(body._id, body);

      res.send(data);
    } catch (e) {
      next(e);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const data = await this.quoteService.add(body);

      res.send(data);
    } catch (e) {
      next(e);
    }
  };

  public count = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const count = await this.quoteService.count();

      res.send(count);
    } catch (e) {
      next(e);
    }
  };
}
