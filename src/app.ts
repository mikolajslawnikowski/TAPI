import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import corsMiddleware from "./middleware/corsMiddleware";
import setHeaders from "./middleware/setHeadersMiddleware";
import charactersRoutes from "./routes/charactersRoutes";
import fruitsRoutes from "./routes/fruitsRoutes";
import arcsRoutes from "./routes/arcsRoutes";
import typeDefs from "./graphQL/schema";
import resolvers from "./graphQL/resolvers";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app: Application = express();
const swaggerDocument = YAML.load("./src/docs/openapi.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(corsMiddleware);
app.use(setHeaders);

app.use("/characters", charactersRoutes);
app.use("/fruits", fruitsRoutes);
app.use("/arcs", arcsRoutes);

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer();

export default app;
