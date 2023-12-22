import { useQuery } from "@tanstack/react-query";
import PostTodo from "../../../Component/PostTodo";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import TodoCard from "../../../Component/TodoCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { space } from "postcss/lib/list";
import useAllTodo from "../../../hook/useAllTodo";
import DragTodo from "./CompletTodoByDrag/DragTodo";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";


const CreateTodo = () => {
  const axiosPublic= useAxiosPublic()
    const {user,loading}= useContext(AuthContext)
    const [board,setBoard]= useState([])

          //  drop functionality
    const [{isOver},drop]=useDrop(()=>({
      accept:"card",
      drop:(item)=>cardToBoard(item.id),
      collect:(monitor)=>({
        isOver: !!monitor.isOver()
      })
    }))

  
    const cardToBoard=(todo)=>{
         console.log(todo);
        axiosPublic.patch(`/update-todo/${todo._id}`,{status:'completed'})
        .then(res=>{
          console.log(res);
          if (res.data.modifiedCount>0) {
             toast.success('Todo has  completed ')
          }
           setBoard([...board ,todo ])

        })
        .catch(err=>console.log(err))

    }

            // get all todos then filter

  const {todos,isTodoLoading,todosRefetch}= useAllTodo()
    const ongoingTodos= todos?.filter(todo=> todo.status==='ongoing' )
 
    if (isTodoLoading) {
        return <span>loading</span>
    }

  console.log(todos);
    return (
        <div className="flex gap-4  w-full" >
          <div className="lg:w-7/12 ">
          <PostTodo refetch={todosRefetch}></PostTodo>

<div className="gird grid-cols-1 gap-12">
{
   ongoingTodos?.map((todo,index)=> <TodoCard refetch={todosRefetch} todo={todo} key={index}></TodoCard> )
}
</div>
          </div>

{/* drage and drop */}
        
       <div ref={drop} className="lg:w-5/12 h-screen-[100vh] bg-gray-400">
         {
          board.map(todo=><DragTodo todo={todo} key={todo._id}></DragTodo>)
         }
       </div>

        </div>
    );
};

export default CreateTodo;