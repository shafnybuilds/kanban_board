import TaskCard from "@/components/task-card";

function Home() {
  const title = "Do Market Research";
  const id = "BUS 1";
  const points = 5;

  return (
    <>
      <TaskCard title={title} id={id} points={points} />
      <TaskCard title={"Competitor Analysis"} id={"BUS 2"} points={8} />
    </>
  );
}

export default Home;
