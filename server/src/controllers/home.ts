import { Request, Response } from "express";
import { findVacations } from "../models/vacation";

export const getHome = async (req: Request, res: Response) => {
  console.log("Cookies: ", req.cookies);
  res.cookie("cookies", "Some cookies");

  const vacations = await findVacations({ available: true });
  res.render("home", { vacations });
};
