import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Index from "./routes";
import Gallery from "./routes/gallery";
import CreateForest from "./routes/createForest";
import Login from "./routes/auth/login";
import Root from "./routes/root";
import "./styles/style.css";
import Register from "./routes/auth/register";
import ErrorPage from "./routes/error-page";
import ForestDetail from "./routes/forestDetail";
import Profile from "./routes/auth/profile";
import { removeAuthData } from "./services/auth";
import User from "./routes/user";
import EditForest from "./routes/editForest";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: Root.loader,
    children: [
      { 
        index: true, 
        element: <Index />, 
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: Gallery.loader,
      },
      {
        path: "/forest/create",
        element: <CreateForest />,
        loader: CreateForest.loader,
        action: CreateForest.action,
      },
      {
        path: "/forest/:id",
        element: <ForestDetail />,
        loader: ForestDetail.loader,
      },
      {
        path: "/forest/:id/edit",
        element: <EditForest />,
        loader: EditForest.loader,
        action: EditForest.action,
      },
      {
        path: "/user/:id",
        element: <User />,
        loader: User.loader,
      },
      {
        path: "/auth/login",
        element: <Login />,
        action: Login.action,
        loader: Login.loader,
      },
      {
        path: "/auth/logout",
        action: async () => {
          removeAuthData();
          return redirect("/");
        },
      },
      {
        path: "/auth/register",
        element: <Register />,
        action: Register.action,
      },
      {
        path: "/auth/profile",
        element: <Profile />,
        loader: Profile.loader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
