import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// server.get("/api/products", (req, res) => {
//   res.status(200).json(router.db.get("products"));
// });

server.use("/api", router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
