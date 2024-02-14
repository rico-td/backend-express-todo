const { Router } = require("express");
const { AuthRouter } = require("./auth");
const { UserRouter } = require("./user");
const { TodosRouter } = require("./todos");
const { MemberRouter } = require("./member");

const AppRouter = Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/user", UserRouter);
AppRouter.use("/todos", TodosRouter);
AppRouter.use("/member", MemberRouter);

module.exports = { AppRouter };
