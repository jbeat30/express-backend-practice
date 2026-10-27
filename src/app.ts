import path from "node:path";
import express, { type Express, type Request, type Response } from 'express';
const publicPath = path.join(import.meta.dirname, "..", "public");

const app: Express = express();
app.use("/static", express.static(publicPath))
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
    res.send("Got a POST request");
});

app.put("/user", (req: Request, res: Response) => {
    res.send("Got a PUT request at /user");
});

app.delete("/user", (req: Request, res: Response) => {
    res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});