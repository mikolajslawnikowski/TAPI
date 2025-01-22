import express, { Application } from "express";
import corsMiddleware from "./rest/middleware/corsMiddleware";
import setHeaders from "./rest/middleware/setHeadersMiddleware";
import charactersRoutes from "./rest/routes/charactersRoutes";
import fruitsRoutes from "./rest/routes/fruitsRoutes";
import arcsRoutes from "./rest/routes/arcsRoutes";

const app: Application = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(setHeaders);

app.use("/characters", charactersRoutes);
app.use("/fruits", fruitsRoutes);
app.use("/arcs", arcsRoutes);

export default app;
