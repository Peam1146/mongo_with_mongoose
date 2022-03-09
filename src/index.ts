import express from "express";
import { UserControllersImp } from "./controllers/user_controllers";
import { connectDB } from "./databases/mongo_database";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
connectDB();
app.use(express.json());

const userControllers = new UserControllersImp();

app.get("/users", userControllers.getUsers);
app.post("/users", userControllers.createUser);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
