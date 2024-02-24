import Cookies from "universal-cookie";

const cookies = new Cookies();

export const isUserLoggedIn = () => {
  return cookies.get("auth-token") !== undefined;
};

export const loginUser = (value: string | number) => {
  cookies.set("auth-token", value);
};

export const logoutUser = () => {
  cookies.remove("auth-token");
};
