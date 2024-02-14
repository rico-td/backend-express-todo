const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");

const MemberRouter = Router();

MemberRouter.post("/add", (req, res) => {
  res.status(StatusCodes.OK).send("Member added");
});

MemberRouter.delete("/remove", (req, res) => {
  res.status(StatusCodes.OK).send("Member removed");
});

MemberRouter.get("/show", (req, res) => {
  res.status(StatusCodes.OK).send("Member:");
});

module.exports = { MemberRouter };