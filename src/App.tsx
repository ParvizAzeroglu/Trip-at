import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import React from "react";
import Login from "./pages/Login";
import AppPage from "./pages/AppPage";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="app">{children}</div>;
};

const router = createBrowserRouter([
  {
    index: true,
    element: (
      <AppLayout>
        <Homepage />
      </AppLayout>
    ),
  },
  {
    path: "/pricing",
    element: (
      <AppLayout>
        <Pricing />
      </AppLayout>
    ),
  },
  {
    path: "/product",
    element: (
      <AppLayout>
        <Product />
      </AppLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <AppLayout>
        <Login />
      </AppLayout>
    ),
  },
  {
    path: "/app",
    element: (
      <AppLayout>
        <AppPage />
      </AppLayout>
    ),
  },
  {
    path: "*",
    element: (
      <AppLayout>
        <PageNotFound />
      </AppLayout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
