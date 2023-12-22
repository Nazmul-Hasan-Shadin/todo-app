import React from "react";
import useAxiosPublic from "../hook/useAxiosPublic";
import toast from "react-hot-toast";
import { useDrag } from "react-dnd";
import { FaTrash } from "react-icons/fa";
import 'aos/dist/aos.css'; 

const TodoCard = ({ todo, refetch }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: todo },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log(todo);

  // ===================update todo status by patch =================================

  const axiosPublic = useAxiosPublic();
  const handleUpdateStatus = async (id) => {
    try {
      const res = await axiosPublic.patch(`/update-todo/${id}`, {
        status: "completed",
      });
      if (res.data.modifiedCount > 0) {
        toast.success("Todo has Completed");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ===================update todo status  end=================================

  const handleDeleteTodo = (id) => {
    axiosPublic
      .delete(`/todo-delete/${id}`)
      .then((res) => {
        console.log(res);
        refetch();
        toast.success("Deleted Successful");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      ref={drag}
   
      className="card w-56 md:w-[400px] bg-primary mt-12 text-primary-content"
    >
      <div className="card-body p-2 pl-7">
        <span className="flex justify-between">
          <h2 className="card-title"> {todo?.title} </h2>
          <FaTrash onClick={() => handleDeleteTodo(todo?._id)} />
        </span>

        <p> {todo?.desc} </p>
        <div className=" justify-end">
          <div className="flex justify-between">
            <p>  {todo?.deadLine} </p>
            <button
              onClick={() => handleUpdateStatus(todo._id)}
              className=" btn btn-sm md:btn"
            >
              {" "}
              {todo?.status === "completed" ? "completed" : "ongoing"}{" "}
            </button>
          </div>
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
