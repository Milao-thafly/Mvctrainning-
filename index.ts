import Express from "express";
import router from "./routes";
import { fileURLToPath } from "node:url";
import path from "node:path";

const app = Express();

const PORT = 3000

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

app.set("views engine", path.join(__dirname, "views"));


app.use(Express.static(path.join(__dirname, "public")));

app.use(Express.urlencoded({ extended: true }));

console.log("router")
app.use(router);

app.use((req, res) => {
    res.status(404).send("Page non trouvée :::::::::::::");
});

app.listen(PORT, () => {
    console.log(`Le serveur a démarré sur le port ${PORT}`)
})
