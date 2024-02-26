import LoginGoogle from "../components/LoginGoogle";
import PageNav from "../components/PageNav";
import { Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import Message from "../components/Message";

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
        <div
          style={{
            maxWidth: "50%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Message type="success">
            <p>You are already logged in. Go to the app</p>
          </Message>
          <Link
            to={"/app"}
            className="button"
            style={{ color: "white", margin: "auto" }}
          >
            Click to go to the app
          </Link>
        </div>
      ) : (
        <LoginGoogle />
      )}
    </>
  );
};

export default Login;
