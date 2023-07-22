import { Express } from "express";

import { getHome } from "./controllers/home";

import {
  getNewsletterHtml,
  getNewsletterAjax,
  getNewsletterThankyou,
  postNewsletterProcess,
  postApiNewsletterProcess,
} from "./controllers/newsletter";

import {
  getPhotoHtml,
  getPhotoAjax,
  getPhotoThankyou,
  uploadSinglePhotoFile,
  postPhotoProcess,
  postApiPhotoProcess,
} from "./controllers/photo";

import { getApiVacations, getApiVacationSku } from "./controllers/vacations";

import { notFound } from "./controllers/notFound";

export const routing = (app: Express) => {
  app.get("/", getHome);

  app.get("/newsletter-html", getNewsletterHtml);

  app.get("/newsletter-ajax", getNewsletterAjax);

  app.get("/newsletter-thankyou", getNewsletterThankyou);

  app.post("/newsletter-process", postNewsletterProcess);

  app.post("/api/newsletter-process", postApiNewsletterProcess);

  app.get("/photo-html", getPhotoHtml);

  app.get("/photo-ajax", getPhotoAjax);

  app.get("/photo-thankyou", getPhotoThankyou);

  app.post("/photo-process", uploadSinglePhotoFile, postPhotoProcess);

  app.post("/api/photo-process", uploadSinglePhotoFile, postApiPhotoProcess);

  app.get("/api/vacations", getApiVacations);

  app.get("/api/vacation/:sku", getApiVacationSku);

  app.use(notFound);
};
