const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:8081",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

const users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gmail.com",
  },
];

app.get("/api/v1/users", (req, res) => {
  res.json(users);
});

app.post("/api/v1/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

app.delete("/api/v1/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);
  res.json({ id: id });
});

app.put("/api/v1/users/:id", (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const index = users.findIndex((user) => user.id == id);
  users[index] = { ...users[index], name, email };
  res.json(users[index]);
});

const userTasks = [
  {
    id: 1,
    name: "John",
    tasks: [
      {
        id: 1,
        title: "Task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Task 2",
        completed: true,
      },
    ],
  },
];

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
