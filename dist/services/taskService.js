import prisma from "../config.js";
// Get all tasks
export const getAllTasks = async () => {
    return prisma.task.findMany();
};
// Get all tasks
export const getOneTask = async (id) => {
    return prisma.task.findFirst({
        where: { id },
    });
};
// Create a task
export const createTask = async (taskData) => {
    return prisma.task.create({
        data: taskData,
    });
};
// Update a task
export const updateTask = async (id, taskData) => {
    return prisma.task.update({
        where: { id },
        data: taskData,
    });
};
// Delete a task
export const deleteTask = async (id) => {
    return prisma.task.delete({
        where: { id },
    });
};
