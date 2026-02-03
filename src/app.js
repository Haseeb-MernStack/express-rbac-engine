import express from "express";
import demoRoutes from "./routes/demo.routes.js";

const app = express();
app.use(express.json());

app.use("/api", demoRoutes);

export default app;
