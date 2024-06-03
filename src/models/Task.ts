import { TaskMeta } from "src/interfaces/TaskMeta";
import { v4 as uuidv4 } from "uuid";

export class Task {
    #code: string;
    priority: number;
    name: string;
    metaData: TaskMeta[] = [];
    created_at: string;
    completed_at!: string;
    constructor(name: string, priority: number, metaData: TaskMeta[] = []) {
        this.#code = uuidv4();
        this.name = name;
        this.priority = priority;
        this.created_at = Date.now().toString(36);

    }
    markComplete(): boolean {
        this.completed_at = Date.now().toString(36);
        return true;
    }
}