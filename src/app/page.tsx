import TaskCard from "@/components/task-card";
import { tasks, statuses } from "@/utils/data-tasks";

function Home() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  return (
    <>
      <div className="flex divide-y">
        {columns.map((column) => (
          <div>
            <h1>{column.title}</h1>
            {column.tasks.map((task) => (
              <TaskCard task={task} />
            ))}
          </div>
        ))}
      </div>

      {/* <TaskCard task={task} /> */}
      {/* <TaskCard title={"Competitor Analysis"} id={"BUS 2"} points={8} />
      <TaskCard title={"Develop Business Stratgy"} id={"BUS 3"} /> */}
    </>
  );
}

export default Home;
