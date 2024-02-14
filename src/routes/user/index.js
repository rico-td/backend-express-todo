const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

// Datenbank simulieren
let profiles = [
  {
    id: 1,
    firstName: "Max",
    name: "Mustermann",
    birthDate: new Date("1990-10-10"),
  },
  {
    id: 2,
    firstName: "Nina",
    name: "Mustermann",
    birthDate: new Date("1980-10-10"),
  },
];

const UserRouter = Router();

//  ***GET REQUESTS***
// Return profile from a specific user
UserRouter.get("/profile", (req, res) => {
  const userId = parseInt(req.query.userId);
  if (!userId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const userProfile = profiles.find((item) => item.id === userId);
  res.status(StatusCodes.OK).json({ profile: userProfile });
});

// PUT REQUESTS
UserRouter.put("/profile/update", (req, res) => {
  const { username, userId } = req.body;
  
  // Überprüfen, ob alle erforderlichen Parameter mitgegeben wurden
  if (!username || !userId) {
    res.status(StatusCodes.BAD_REQUEST).send("Both 'username' and 'userId' are required");
    return;
  }

  // Aktualisieren des Benutzerprofils
  const currentUser = profiles.find((item) => item.id === userId);
  if (!currentUser) {
    res.status(StatusCodes.NOT_FOUND).send("User not found");
    return;
  }
  currentUser.username = username;

  // Aktualisieren der Profildaten in der Datenbank
  profiles = profiles.map((item) => (item.id === userId ? currentUser : item));

  res.status(StatusCodes.OK).json({ updatedProfile: currentUser });
});

// DELETE REQUESTS
UserRouter.delete("/profile", (req, res) => {
  const { userId } = req.body;

  // Überprüfen, ob der Benutzer mitgegeben wurde
  if (!userId) {
    res.status(StatusCodes.BAD_REQUEST).send("Parameter 'userId' is required");
    return;
  }

  // Löschen des Benutzerprofils
  const deletedUser = profiles.find((item) => item.id === userId);
  if (!deletedUser) {
    res.status(StatusCodes.NOT_FOUND).send("User not found");
    return;
  }
  profiles = profiles.filter((item) => item.id !== userId);

  res.status(StatusCodes.OK).json({ deletedUserId: userId });
});

module.exports = { UserRouter };