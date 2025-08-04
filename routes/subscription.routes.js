import { Router } from "express";

const subscriptionRouter = Router();

// Define routes for subscription-related operations
subscriptionRouter.get("/", (req, res) => res.send({ title: "GET all subscriptions" }));

export default subscriptionRouter;