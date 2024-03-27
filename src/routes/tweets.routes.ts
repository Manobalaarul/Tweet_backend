import { Router } from "express";
import { getTweetController,createTweetController,deleteTweetController,updateTweetController,getAllTweetsController } from "../controllers/tweet.controller";
const tweetRouter = Router();


// Define 

tweetRouter.get("/:tweetId", getTweetController)
tweetRouter.get("/get/all", getAllTweetsController)
tweetRouter.post("/",createTweetController)
tweetRouter.delete("/:tweetId",deleteTweetController)
tweetRouter.put("/",updateTweetController)


export default tweetRouter