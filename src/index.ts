import { Task } from "./models/Task";

const tasks : Task[] = [];

const task1 = new Task("Task 1", 1);
const task2 = new Task("Task 2", 2);

tasks.push(task1, task2);
task1.markComplete();
console.log(tasks);