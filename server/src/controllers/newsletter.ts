import { Request, Response } from "express";

export const getNewsletterHtml = (_req: Request, res: Response) =>
  res.render("newsletter-html");

export const getNewsletterAjax = (_req: Request, res: Response) =>
  res.render("newsletter-ajax");

export const getNewsletterThankyou = (_req: Request, res: Response) =>
  res.render("newsletter-thankyou");

export const postNewsletterProcess = (req: Request, res: Response) => {
  console.log("HTML: ", req.body);
  res.redirect(303, "/newsletter-thankyou");
};

export const postApiNewsletterProcess = (req: Request, res: Response) => {
  console.log("AJAX: ", req.body);
  res.send({ success: true });
};
