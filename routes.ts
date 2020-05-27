import { Router } from "https://deno.land/x/oak/mod.ts";
import {getQuestion,createQuestion} from "./controllers/questionController.ts";

const router = new Router();

router
    .get("/questions",getQuestion)
    .post("/questions",createQuestion);


export default router;
