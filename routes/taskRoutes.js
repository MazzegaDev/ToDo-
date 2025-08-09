const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router.get("/", (req, res) => taskController.renderHome(req, res)); // -> exibe a home page
router.get("/", (req, res) => taskController.renderTasks(req, res)); // -> exibe suas tarefas
router.post("/addTask", (req, res) => taskController.addTask(req, res)); // -> adiciona uma nova tarefa
router.post("/removeTask/:id", (req, res) => taskController.removeTask(req, res)); // -> remove uma tarefa *usa post pois HTML e EJS o form nao suporta REMOVE
module.exports = router;
