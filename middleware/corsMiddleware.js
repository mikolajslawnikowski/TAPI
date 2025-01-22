import cors from "cors";

const allowedOrigins = ["http://localhost:3000"];

const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});

export default corsMiddleware;
