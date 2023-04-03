import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Users from "./Users";
import UserDetails from "./UserDetails";
import App from "../../App";

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

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
