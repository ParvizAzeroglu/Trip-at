import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppPage from "./pages/AppPage";
import CityList from "./components/CityList";
import Countries from "./components/Countries";
import City from "./components/City";
import { CitiesProvider } from "./contexts/CitiesContext";
import FormPage from "./components/FormPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppPage />}>
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
      <RouterProvider router={router} />
    </CitiesProvider>
  );
};

export default App;
