import cors, { CorsOptions } from "cors";

const allowedOrigins: string[] = [
  "http://localhost:3000",
  "https://studio.apollographql.com",
];

const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
