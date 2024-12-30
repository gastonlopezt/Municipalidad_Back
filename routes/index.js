import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/index.js";

const appRouter = Router();

appRouter.get("/", getAllUsers);
appRouter.get("/:id", getUser);
appRouter.post("/create", createUser);
appRouter.put("/update/:id", updateUser);
appRouter.delete("/delete/:id", deleteUser);




export default appRouter;