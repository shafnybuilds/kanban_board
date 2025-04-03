export type Task = {
  title: string;
  id: string;
  points?: number;
};

export const tasks: Task[] = [
  // we can also say Array<Task>
  {
    title: "Do Market Research",
    id: "BUS 1",
    points: 5,
  },
  {
    title: "Competitor Analysis",
    id: "BUS 2",
  },
  {
    title: "Develop a Business Strategy",
    id: "BUS 3",
    points: 8,
  },
  {
    title: "Develop Marketing Strategy",
    id: "BUS 4",
    points: 5,
  },
];
