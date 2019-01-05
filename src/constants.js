//If in 'development' mode, use "proxy" route that is inside package.json. Otherwise, use freshapi.zionmarket.com
export const DEFAULT_API_URL =
  process.env.NODE_ENV === "development" ? "/" : "http://api.devtech.xyz/";

console.log(`Current mode: ${process.env.NODE_ENV} -- ${DEFAULT_API_URL}`);
