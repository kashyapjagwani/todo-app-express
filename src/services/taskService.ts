import prisma from "../config.js";
import { Task } from "../interfaces.js";

// Get all tasks
export const getAllTasks = async (): Promise<Task[]> => {
  return prisma.task.findMany();
};

// Get all tasks
export const getOneTask = async (id: string): Promise<Task | null> => {
  return prisma.task.findFirst({
    where: { id },
  });
};

// Create a task
export const createTask = async (
  taskData: Omit<Task, "id" | "createdAt" | "updatedAt">
): Promise<Task> => {
  return prisma.task.create({
    data: taskData,
  });
};

// Update a task
export const updateTask = async (
  id: string,
  taskData: Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>
): Promise<Task | null> => {
  return prisma.task.update({
    where: { id },
    data: taskData,
  });
};

// Delete a task
export const deleteTask = async (id: string): Promise<Task | null> => {
  return prisma.task.delete({
    where: { id },
  });
};
