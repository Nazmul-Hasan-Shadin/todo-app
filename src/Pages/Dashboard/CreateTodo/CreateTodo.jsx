import { useQuery } from "@tanstack/react-query";
import PostTodo from "../../../Component/PostTodo";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import TodoCard from "../../../Component/TodoCard";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { space } from "postcss/lib/list";
import useAllTodo from "../../../hook/useAllTodo";


const CreateTodo = () => {
    const {user,loading}= useContext(AuthContext)

  const {todos,isTodoLoading,todosRefetch}= useAllTodo()
    const ongoingTodos= todos?.filter(todo=> todo.status==='ongoing' )
 
    if (isTodoLoading) {
        return <span>loading</span>
    }

  console.log(todos);
    return (
        <div className="lg:w-7/12 " >
            <PostTodo refetch={todosRefetch}></PostTodo>

            <div className="gird grid-cols-1 gap-12">
            {
               ongoingTodos?.map((todo,index)=> <TodoCard refetch={todosRefetch} todo={todo} key={index}></TodoCard> )
            }
            </div>

        </div>
    );
};

export default CreateTodo;