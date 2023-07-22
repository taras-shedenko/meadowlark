import { Request, Response } from "express";
import { findVacations, findVacationSku } from "../models/vacation";

export const getApiVacations = async (_req: Request, res: Response) => {
  const vacations = await findVacations();
  res.json(vacations);
};

export const getApiVacationSku = async (req: Request, res: Response) => {
  const vacation = await findVacationSku(req.params.sku);
  res.json(vacation);
};
