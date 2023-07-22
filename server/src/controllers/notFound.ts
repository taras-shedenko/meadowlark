import { Request, Response } from "express";

export const notFound = (_req: Request, res: Response) => res.render("404");
