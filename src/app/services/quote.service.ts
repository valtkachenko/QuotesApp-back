import QuoteModel from "../models/quote.model";
import { Quote } from "../types/quote.interface";

export class QuoteService {
  private readonly quoteModel;

  constructor() {
    this.quoteModel = QuoteModel;
  }

  public add = (data: Quote): Promise<any> => {
    return this.quoteModel.create(data);
  };

  public findAll = (): Promise<any> => {
    return this.quoteModel.find();
  };

  public findById = (id: string): Promise<any> => {
    return this.quoteModel.findOne({ _id: id });
  };

  public count = (): Promise<any> => {
    return this.quoteModel.countDocuments();
  };

  public update = (id: string, data: Quote): Promise<any> => {
    return this.quoteModel.updateOne({ _id: id }, data);
  };

  public remove = async (id: string): Promise<any> => {
    return this.quoteModel.deleteOne({ _id: id });
  };
}
