// PrivateRoute

import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "./firebase/auth";
import AppPage from "./pages/AppPage";

const PrivateRoutes = () => {
  const authToken = isUserLoggedIn();
  return authToken ? <AppPage /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
