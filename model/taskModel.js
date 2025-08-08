class Task {
  constructor(name, desc) {
    this.id = Date.now();
    this.name = name;
    this.desc = desc;
  }
}

module.exports = Task;
