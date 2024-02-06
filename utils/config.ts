const getConfig = () => {
  const { BASE_URL } = process.env;

  if (!BASE_URL) {
    throw Error("Configuration error. Did you forget to set .env?");
  }

  return { BASE_URL };
};

export const config = getConfig();
