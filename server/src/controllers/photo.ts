import path from "path";
import { Request, Response } from "express";
import multer from "multer";

const uploadsDir = path.resolve(__dirname, "..", "..", "uploads");

const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (_req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

export const getPhotoHtml = (_req: Request, res: Response) =>
  res.render("photo-html");

export const getPhotoAjax = (_req: Request, res: Response) =>
  res.render("photo-ajax");

export const getPhotoThankyou = (_req: Request, res: Response) =>
  res.render("photo-thankyou");

export const uploadSinglePhotoFile = upload.single("photo-file");

export const postPhotoProcess = (req: Request, res: Response) => {
  console.log("HTML: ", req.file?.originalname);
  res.redirect(303, "/photo-thankyou");
};

export const postApiPhotoProcess = (req: Request, res: Response) => {
  console.log("AJAX: ", req.file?.originalname);
  res.send({ success: true });
};
