import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { NewsLetter } from "./NewsLetter";
import { NewsLetterThankYou } from "./NewsLetterThankYou";
import { Photo } from "./Photo";
import { PhotoThankYou } from "./PhotoThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/newsletter",
    element: <NewsLetter />,
  },
  {
    path: "/newsletter-thankyou",
    element: <NewsLetterThankYou />,
  },
  {
    path: "/photo",
    element: <Photo />,
  },
  {
    path: "/photo-thankyou",
    element: <PhotoThankYou />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
