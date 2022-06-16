const router = require('express').Router()
const fs = require("fs");
const path = require("path");


/*
TYPE: GET
PARAMS: null
QUERY: count
DESCRIPTION: route to fetch all todos
*/
router.get("/", (req, res) => {
  try {
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const { count } = req.query;

    if (count) {
      return res.send(todos.slice(0, count));
    } else {
      return res.send(todos.slice(0, count));
    }
  } catch (error) {
    return res.send(error.message);
  }
});

/*
TYPE: GET
PARAMS: id
QUERY: null
DESCRIPTION: route to fetch a specific todo
*/
router.get("/:id", (req, res) => {
  try {
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );
    const { id } = req.params;
    const todo = todos.find((e) => e.id == id);

    if (todo) {
      return res.send(todo);
    } else {
      return res.send("item not found");
    }
  } catch (error) {
    return res.send(error.message);
  }
});

/*
TYPE: POST
PARAMS: null
QUERY: null
BODY: 
DESCRIPTION: route to add a specific todo
*/
router.post("/", (req, res) => {
  try {
    const data = req.body;
    const todos = JSON.parse(
      fs.readFileSync(path.join(path.resolve(), "db.json"), { encoding: "UTF-8" })
    );
    const todo = {
      ...data,
      id: todos.length + 1,
    };

    todos.push(todo);

    fs.writeFileSync(path.join(path.resolve(), "db.json"), JSON.stringify(todos));
    //   console.log(todo);
    res.send(todo);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

/*
TYPE: DELETE
PARAMS: id
QUERY: null
BODY: 
DESCRIPTION: route to add a specific todo
*/
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const newTodos = todos.filter((todo) => todo.id != id);

    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(newTodos));
    //   console.log(todo);
    res.send(newTodos);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

/*
TYPE: PUT
PARAMS: id
QUERY: null
BODY: 
DESCRIPTION: route to add a specific todo
*/
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const newTodos = todos.map((todo) => {
      console.log(todo, id);
      if (todo.id == id) {
        return {
          ...todo,
          ...data,
        };
      } else {
        return todo;
      }
    });

    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(newTodos));
    //   console.log(todo);
    res.send(newTodos);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

module.exports = router