import TaskCard from "@/components/task-card";
import { Task } from "@/utils/data-tasks";

function Home() {
  const task: Task = {
    title: "Do Market Research",
    id: "BUS 1",
    points: 4,
  };

  return (
    <>
      <TaskCard task={task} />
      {/* <TaskCard title={"Competitor Analysis"} id={"BUS 2"} points={8} />
      <TaskCard title={"Develop Business Stratgy"} id={"BUS 3"} /> */}
    </>
  );
}

export default Home;
