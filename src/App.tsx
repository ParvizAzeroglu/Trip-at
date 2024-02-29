import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import PrivateRoutes from "./utilities/PrivateRoutes";
import CityList from "./components/CityList";
import Countries from "./components/Countries";
import City from "./components/City";
import { CitiesProvider } from "./contexts/CitiesContext";
import FormPage from "./components/FormPage";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./pages/SpinnerFullPage";

const PrivateRoutes = lazy(() => import("./utilities/PrivateRoutes"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<PrivateRoutes />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="form" element={<FormPage />} />
          <Route path="countries" element={<Countries />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return (
    <CitiesProvider>
      <Suspense fallback={<SpinnerFullPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </CitiesProvider>
  );
};

export default App;
