import * as taskService from "../services/taskService.js";
// Error wrapper
const handleControllerError = (controller) => {
    return async (req, res) => {
        try {
            await controller(req, res);
        }
        catch (error) {
            res.status(500).json({
                message: error instanceof Error ? error.message : "An unknown error occurred",
            });
        }
    };
};
export const getAllTasks = handleControllerError(async (req, res) => {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
});
export const getOneTask = handleControllerError(async (req, res) => {
    console.log(req.params.id);
    const task = await taskService.getOneTask(req.params.id);
    console.log(task);
    res.status(200).json(task);
});
export const createTask = handleControllerError(async (req, res) => {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
});
export const updateTask = handleControllerError(async (req, res) => {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) {
        res.status(404).json({ message: "Task not found" });
        return;
    }
    res.status(200).json(task);
});
export const deleteTask = handleControllerError(async (req, res) => {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) {
        res.status(404).json({ message: "Task not found" });
        return;
    }
    res.status(200).json({ message: "Task deleted successfully" });
});
