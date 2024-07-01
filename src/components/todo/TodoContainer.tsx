import { useAppSelector } from "@/Redux/hook";
import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className=" flex justify-between pb-2">
        <AddTodoModel />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl p-2">
        {/* <div className="bg-white rounded-md justify-between items-center p-3 space-y-5">
          <p>there is no task pending</p>
        </div> */}
        <div className=" bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
