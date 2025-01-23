import app from "./app";

const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`GraphQL server is running on http://localhost:${PORT}/graphql`);
});
