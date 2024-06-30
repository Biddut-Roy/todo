const TodoCard = () => {
  return (
    <div className=" bg-white rounded-md flex justify-between items-center p-3 m-2">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo title</p>
      <p>Time</p>
      <p>description</p>
      <div className="space-x-5">
        <button>del</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default TodoCard;