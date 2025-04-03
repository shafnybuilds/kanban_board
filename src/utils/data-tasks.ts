export type Status = "to-do" | "in-progress" | "done";

export type Task = {
  title: string;
  id: string;
  status: Status;
  points?: number;
};

export const statuses: Status[] = ["to-do", "in-progress", "done"];

export const tasks: Task[] = [
  // we can also say Array<Task>
  {
    title: "Do Market Research",
    id: "BUS 1",
    status: "to-do",
    points: 5,
  },
  {
    title: "Competitor Analysis",
    id: "BUS 2",
    status: "in-progress",
  },
  {
    title: "Develop a Business Strategy",
    id: "BUS 3",
    status: "to-do",
    points: 8,
  },
  {
    title: "Develop Marketing Strategy",
    id: "BUS 4",
    status: "in-progress",
    points: 5,
  },
  {
    title: "Negotiate Partnerships",
    id: "BUS 5",
    status: "to-do",
    points: 3,
  },
  {
    title: "Develop marketing plan",
    id: "BUS 6",
    status: "to-do",
    points: 5,
  },
  {
    title: "Implement marketing plan",
    id: "BUS 7",
    status: "in-progress",
    points: 8,
  },
  {
    title: "Evaluate Business Performance",
    id: "BUS 8",
    status: "done",
    points: 6,
  },
];
