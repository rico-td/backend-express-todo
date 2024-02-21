const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
// const { v4: uuidv4 } = require('uuid');

const TodosRouter = Router();

const todos = [
  {
    id: 1,
    userId: 1,
    task: "Wäsche waschen",
    isDone: true,
  },
  {
    id: 2,
    userId: 1,
    task: "Müll rausbrigen",
    isDone: false,
  },
  {
    id: 3,
    userId: 2,
    task: "Tanzen",
    isDone: false,
  },
  {
    id: 4,
    userId: 2,
    task: "Auto fahren",
    isDone: true,
  },
];
// GET REQUESTS

// /v1/todos/byid
TodosRouter.get("/byid", (req, res) => {
  const todoId = req.query.todoId;
  if (!todoId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  res.status(StatusCodes.OK).send("Get Todo by id");
});

TodosRouter.get("/byuserid", (req, res) => {
  const userId = req.query.todoId;
  if (userId) res.status(StatusCodes.OK).send("Get Todo by user id");
});

// Hausaufgabe 15.02

TodosRouter.get("/all", (req, res) => {
  res.status(StatusCodes.OK).send(todos);
});

// POST REQUEST TO ADD A NEW TODO
TodosRouter.post("/todo", (req, res) => {
  const { id, userId, task, isDone } = req.body;

  // check for valid input
  const parsedId = parseInt(id);
  console.log(parsedId);
  const parsedUserId = parseInt(userId);
  console.log(parsedUserId);
  if (isNaN(parsedId) || isNaN(parsedUserId)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("one of the parameter is not valid");
  }
  // check for missing parameter
  let errorMessage = "missing parameter:";
  if (!id) errorMessage += " id";
  if (!userId) errorMessage += " userId";
  if (!task) errorMessage += " task";
  if (!isDone) errorMessage += " isDone";
  console.log("errorMessage:", errorMessage);

  if (!id || !userId || !task || !isDone) {
    return res.status(StatusCodes.BAD_REQUEST).send(errorMessage);
  } else {
    todos.push(req.body);
    return res.status(201).send("Todo created");
  }
});

// --------------------------------------------------------

// PUT REQUESTS
TodosRouter.put("/mark", (req, res) => {
  res.status(StatusCodes.OK).send("Todo als erledeigt markieren");
});
TodosRouter.put("/update", (req, res) => {
  res.status(StatusCodes.OK).send("Todo aktuallisieren");
});

// POST REQUESTS
TodosRouter.post("/create", (req, res) => {
  res.status(StatusCodes.OK).send("Erstellen eines Todos");
});

// DELETE REQUEST
TodosRouter.delete("/delete", (req, res) => {
  res.status(StatusCodes.OK).send("DELTE Todo");
});

module.exports = { TodosRouter };
