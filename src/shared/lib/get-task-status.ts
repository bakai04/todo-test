import { TaskStates } from "@/store/tasksSlice";

interface TaskStatusStyles {
  backgroundColor: string;
  color: string;
  buttonLabel: string | null;
  nextStep: TaskStates | null;
}

export const getTaskStatusStyles = (status: TaskStates): TaskStatusStyles => {
  switch (status) {
    case "new":
      return {
        backgroundColor: "white",
        color: "black",
        buttonLabel: "На работу",
        nextStep: "inProgress",
      };
    case "inProgress":
      return {
        backgroundColor: "#02456b",
        color: "white",
        buttonLabel: "Завершить",
        nextStep: "completed",
      };
    case "completed":
      return {
        backgroundColor: "green",
        color: "white",
        buttonLabel: null,
        nextStep: null,
      };
    case "cancelled":
      return {
        backgroundColor: "red",
        color: "white",
        buttonLabel: "Вернуть",
        nextStep: "new",
      };
    default:
      return {
        backgroundColor: "white",
        color: "black",
        buttonLabel: null,
        nextStep: "inProgress",
      };
  }
};