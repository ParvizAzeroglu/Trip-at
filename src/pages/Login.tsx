import LoginGoogle from "../components/LoginGoogle";
import PageNav from "../components/PageNav";
import { Toaster } from "react-hot-toast";

const Login = () => {
  return (
    <>
      <Toaster />
      <PageNav />
      <span className="space-90"></span>
      <span className="space-90"></span>
      <span className="space-60"></span>
      <LoginGoogle />
    </>
  );
};

export default Login;
