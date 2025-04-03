import TaskCard from "@/components/task-card";
import { tasks } from "@/utils/data-tasks";

function Home() {
  return (
    <>
      {tasks.map((task) => {
        return <TaskCard task={task} />;
      })}
      {/* <TaskCard task={task} /> */}
      {/* <TaskCard title={"Competitor Analysis"} id={"BUS 2"} points={8} />
      <TaskCard title={"Develop Business Stratgy"} id={"BUS 3"} /> */}
    </>
  );
}

export default Home;
