import { Router,Request,Response } from "express";

const helloRouter = Router();


// Define 

helloRouter.get("/",(req:Request,res:Response)=>{
    res.json({"data":"Server is Live"})
} );

export default helloRouter