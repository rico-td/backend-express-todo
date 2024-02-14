const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");

const MemberRouter = Router();

MemberRouter.post("/add", (req, res) => {
  const { memberName } = req.body;
  if (!memberName) {
    res.status(StatusCodes.BAD_REQUEST).send("Parameter 'memberName' is required");
    return;
  }
  // Logik für das Hinzufügen eines Mitglieds
  res.status(StatusCodes.OK).send("Member added");
});

MemberRouter.delete("/remove", (req, res) => {
  const { memberId } = req.query;
  if (!memberId) {
    res.status(StatusCodes.BAD_REQUEST).send("Parameter 'memberId' is required");
    return;
  }
  // Logik für das Entfernen eines Mitglieds
  res.status(StatusCodes.OK).send("Member removed");
});

MemberRouter.get("/show", (req, res) => {
  // Logik für das Anzeigen der Mitglieder
  res.status(StatusCodes.OK).send("Member list");
});

module.exports = { MemberRouter };