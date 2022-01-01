import express from "express";
import cors from "cors";
import { contact, signup, login } from "./router.js";

const app = express();

const hostname = "127.0.0.1";
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routers Get and Post
app.post("/contact", contact);
app.post("/signup", signup);
app.post("/login", login);

// Server
app.listen(port, hostname, () => {
    console.log(`Server is listening on port http://${hostname}:${port}`);
});

