import express, { Application } from "express";
import corsMiddleware from "./middleware/corsMiddleware";
import setHeaders from "./middleware/setHeadersMiddleware";
import charactersRoutes from "./routes/charactersRoutes";
import fruitsRoutes from "./routes/fruitsRoutes";
import arcsRoutes from "./routes/arcsRoutes";

const app: Application = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(setHeaders);

app.use("/characters", charactersRoutes);
app.use("/fruits", fruitsRoutes);
app.use("/arcs", arcsRoutes);

export default app;
