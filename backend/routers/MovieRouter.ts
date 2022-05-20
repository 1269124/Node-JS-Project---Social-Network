import {Router} from "express";
import {
    createMovie,
    deleteMovie,
    getAllMovies,
    getMovie,
    updateMovie
} from "../controllers/MovieController";
import {createUser} from "../controllers/UserController";

export const siteRouter = Router();
siteRouter.get("/getMovies", getAllMovies);
siteRouter.get("/movie/:id", getMovie);
siteRouter.post("/movie", createMovie);
siteRouter.put("/movie/:id", updateMovie);
siteRouter.delete("/movie/:id", deleteMovie);
siteRouter.post("/sn/register", createUser);

