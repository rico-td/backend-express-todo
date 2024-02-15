const { Router, request } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
// const { v4: uuidv4 } = require('uuid');

const TodosRouter = Router();

const todos = [
  {
    id: 1,
    userId: 1,
    task: "Wäsche waschen",
    isDone: true,
    dueDate: new Date("2024-03-03"),
  },
  {
    id: 2,
    userId: 1,
    task: "Müll rausbrigen",
    isDone: false,
    dueDate: new Date("2024-03-03"),
  },
  {
    id: 3,
    userId: 2,
    task: "Tanzen",
    isDone: false,
    dueDate: new Date("2024-03-03"),
  },
  {
    id: 4,
    userId: 2,
    task: "Auto fahren",
    isDone: true,
    dueDate: new Date("2024-03-03"),
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

  const userId = req.query.todoId
  if (userId)
  res.status(StatusCodes.OK).send("Get Todo by user id");
});

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


// Hausaufgabe 15.02

TodosRouter.get("/all", (req, res) => {
  res.status(StatusCodes.OK).send(todos);
});

// POST REQUEST TO ADD A NEW TODO
TodosRouter.post("/todo", (req, res) => {
  const { id, userId, task, dueDate} = req.body;
  if (!id || !userId || !task || !dueDate) {
    res.status(StatusCodes.BAD_REQUEST)
  }
  todos.push(req.body)
  res.status(201).json( {message: "Todo created"});

})

module.exports = { TodosRouter };

