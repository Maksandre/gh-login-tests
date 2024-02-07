import { User } from "./types";

const getConfig = () => {
  const { BASE_URL, EMAIL, PASSWORD, USERNAME } = process.env;

  if (!BASE_URL || !EMAIL || !PASSWORD || !USERNAME) {
    throw Error("Configuration error. Did you forget to set .env?");
  }

  const user: User = {
    email: EMAIL,
    password: PASSWORD,
    username: USERNAME,
  };

  return { baseUrl: BASE_URL, user };
};

export const config = getConfig();
