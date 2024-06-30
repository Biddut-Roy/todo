import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className=" bg-red-500 w-full h-[500px] rounded-xl p-5">
        <div className="bg-white rounded-md justify-between items-center p-3 space-y-5">
          <p>there is no task pending</p>
        </div>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
