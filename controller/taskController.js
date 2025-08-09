const Task = require("../model/taskModel");

class taskController {
  constructor() {
    this.tasks = [];
  }
  addTask(req, res) {
    const name = req.body.name;
    const desc = req.body.desc;

    if (!name || !desc) {
      return res
        .status(400)
        .send("You must inform a valid name and description!");
    }
    const newTask = new Task(name, desc);
    this.tasks.push(newTask);

    res.redirect("/");
  }

  removeTask(req, res) {
    const taskID = parseInt(req.params.id);

    const taskIndex = this.tasks.findIndex(task => task.id === taskID);

    if (taskIndex === -1) {
      return res.status(404).send("Task not found");
    }

    this.tasks.splice(taskIndex, 1);

    res.redirect("/");
  }

  renderHome(req, res) {
    res.render("home", { tasks: this.tasks });
  }


}

module.exports = new taskController();
