import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import RootLayout from "./Pages/RootLayout";
import LoginPage from "./Pages/LoginPage";
import WelcomePage from "./Pages/WelcomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoggedInPage from "./Pages/LoggedInPage";
import { loader as LoggedInLoader } from "./Pages/LoggedInPage";
import BookStoreFront from "./Pages/LoggedInPages/BookStoreFront";
import Profile from "./Pages/LoggedInPages/UserPages/Profile";
import EditProfile from "./Pages/LoggedInPages/UserPages/EditProfile";
import BooksInLibrary from "./Pages/LoggedInPages/UserPages/BooksInLibrary";
import EditUserLibrary from "./Pages/LoggedInPages/AccoutantPages/EditUserLibrary";
import EditAccounts from "./Pages/LoggedInPages/AdminPages/EditAccounts";
import EditBooks from "./Pages/LoggedInPages/ManagerPages/EditBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: ":id",
        element: <LoggedInPage />,
        loader: LoggedInLoader,
        children: [
          {
            index: true,
            element: <BookStoreFront />,
          },
          {
            path: "books-in-library",
            element: <BooksInLibrary />,
          },
          {
            path: "profile",
            element: <Profile />,
            children: [
              {
                path: "edit-profile",
                element: <EditProfile />,
              },
            ],
          },
          {
            path: "edit-user-library",
            element: <EditUserLibrary />,
          },
          {
            path: "edit-books",
            element: <EditBooks />,
          },
          {
            path: "edit-accounts",
            element: <EditAccounts />,
          },
        ],
      },
    ],
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  // const dispatch = useDispatch();

  return <RouterProvider router={router} />;
}

export default App;
