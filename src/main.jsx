import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Users from "./components/pages/Users";
import UserDetails from "./components/pages/UserDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "users",
        element: <Users />,
        loader: async () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "user-details/:id",
        element: <UserDetails />,
        loader: async ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
