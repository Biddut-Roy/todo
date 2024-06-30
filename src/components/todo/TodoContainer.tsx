import { Button } from "../ui/button";
import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className=" flex justify-between pb-2">
        <Button className=" bg-primary-gradient">Add todo</Button>
        <AddTodoModel />
        <Button>Filter</Button>
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl p-2">
        {/* <div className="bg-white rounded-md justify-between items-center p-3 space-y-5">
          <p>there is no task pending</p>
        </div> */}
        <div className=" bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
