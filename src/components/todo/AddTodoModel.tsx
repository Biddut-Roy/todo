import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAddTodosMutation } from "@/Redux/Api/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import { useAppDispatch } from "@/Redux/hook";
// import { addTodo } from "@/Redux/features/todoSlice";

const AddTodoModel = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  //local store
  // const dispatch = useAppDispatch();

  const [addTodos, { data, isLoading, isError, isSuccess }] =
    useAddTodosMutation();

  console.log({ data, isLoading, isError, isSuccess });

  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    // const id = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      title: task,
      description: description,
      inComplete: false,
      priority,
    };

    //local store
    // dispatch(addTodo(taskDetails));
    addTodos(taskDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-primary-gradient">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish it.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onsubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Priority</Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">high</SelectItem>
                  <SelectItem value="medium">medium</SelectItem>
                  <SelectItem value="low">low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogClose asChild>
            <Button type="submit">Submit</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModel;
