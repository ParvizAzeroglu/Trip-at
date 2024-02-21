import LoginGoogle from "../components/LoginGoogle";
import PageNav from "../components/PageNav";
import { Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

const cookies = new Cookies();

const Login = () => {
  return (
    <>
      <Toaster />
      <PageNav />
      <span className="space-90"></span>
      <span className="space-90"></span>
      <span className="space-60"></span>
      {cookies.get("auth-token") ? (
        <p>
          You are already logged in. Go to the app {"-->"}
          <Link
            to={"/app"}
            className="button"
            style={{ color: "white", marginLeft: "1rem" }}
          >
            Click to go to the app
          </Link>
        </p>
      ) : (
        <LoginGoogle />
      )}
    </>
  );
};

export default Login;
