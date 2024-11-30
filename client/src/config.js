let BASE_URL = "https://jellyfish-app-3ei5q.ondigitalocean.app/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
