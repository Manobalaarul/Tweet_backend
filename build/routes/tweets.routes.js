"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweet_controller_1 = require("../controllers/tweet.controller");
const tweetRouter = (0, express_1.Router)();
// Define 
tweetRouter.get("/:tweetId", tweet_controller_1.getTweetController);
tweetRouter.get("/get/all", tweet_controller_1.getAllTweetsController);
tweetRouter.post("/", tweet_controller_1.createTweetController);
tweetRouter.delete("/:tweetId", tweet_controller_1.deleteTweetController);
tweetRouter.put("/", tweet_controller_1.updateTweetController);
exports.default = tweetRouter;
