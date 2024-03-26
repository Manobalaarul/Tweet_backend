import { Request, Response } from "express";
import {
  getTweetRepo,
  createTweetRepo,
  updateTweetRepo,
  deleteTweetRepo,
  getAllTweetsRepo,
} from "../repositories/tweet.repostory";
import { ITweetInterface } from "../database/interfaces/tweet.interface";
import { updateUserWithTweetIDRepo } from "../repositories/user.repostory";

export const getTweetController = async (req: Request, res: Response) => {
  const tweetId = req.params.tweetId as string;
  try {
    const tweet = await getTweetRepo(tweetId);
    if (tweet) {
      res.status(200).json({ data: tweet });
    } else {
      res.status(500).json({ error: "tweet not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const getAllTweetsController = async (req: Request, res: Response) => {
  try {
    const tweets = await getAllTweetsRepo();
    if (tweets) {
      res.status(200).json({ data: tweets });
    } else {
      res.status(500).json({ error: "Tweets Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const createTweetController = async (req: Request, res: Response) => {
  const tweet: ITweetInterface = req.body;
  try {
    const success = await createTweetRepo(tweet);
    if (success) {
      const userUpdateSuccess = await updateUserWithTweetIDRepo(tweet.adminId,tweet.tweetId)
      if(userUpdateSuccess){
        res.status(200).json({ data: tweet });
      }
      else{
        res.status(500).json({ error: "user not updated!" });
      }
     
    } else {
      res.status(500).json({ error: "tweet not created!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const updateTweetController = async (req: Request, res: Response) => {
  const updatedTweet: ITweetInterface = req.body;
  try {
    const success = await updateTweetRepo(updatedTweet.tweetId, updatedTweet);
    if (success) {
      res.status(200).json({ data: "Tweet Updated" });
    } else {
      res.status(500).json({ error: "tweet not updated!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const deleteTweetController = async (req: Request, res: Response) => {
  const tweetId = req.params.tweetId as string;
  try {
    const success = await deleteTweetRepo(tweetId);
    if (success) {
      res.status(200).json({ data: "Tweet Deleted" });
    } else {
      res.status(500).json({ error: "tweet not deleted!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
