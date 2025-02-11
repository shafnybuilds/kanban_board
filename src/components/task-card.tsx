const TaskCard = ({ title, id, points }) => {
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50 font-mono">
      <div className="text-2xl py-2 font-semibold"> {title} </div>
      <div className="flex justify-between py-2 text-gray-700">
        <div>{id}</div>
        <div> El-Dorado </div>
        <div>{points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
