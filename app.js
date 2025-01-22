import express from "express";
import corsMiddleware from "./middleware/corsMiddleware.js";
import setHeaders from "./middleware/setHeadersMiddleware.js";
import charactersRoutes from "./routes/charactersRoutes.js";
// import fruitsRoutes from "./routes/fruitsRoutes.js";
// import arcsRoutes from "./routes/arcsRoutes.js";

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(setHeaders);

app.use("/characters", charactersRoutes);
// app.use("/fruits", fruitsRoutes);
// app.use("/arcs", arcsRoutes);

export default app;