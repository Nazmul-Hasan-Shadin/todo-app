import { useQuery } from "@tanstack/react-query";
import PostTodo from "../../../Component/PostTodo";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import TodoCard from "../../../Component/TodoCard";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { space } from "postcss/lib/list";


const CreateTodo = () => {
    const {user,loading}= useContext(AuthContext)

       const axiosPublic=useAxiosPublic()
    const {data:todos={}, isLoading,refetch}= useQuery({
        queryKey: ['alltodos'],
        enabled: !false
        ,
        queryFn: async ()=>{
            const todos= await axiosPublic.get(`/get-todo/${user?.email}`)
            return todos.data
        }
    })

    const ongoingTodos= todos?.filter(todo=> todo.status==='ongoing' )
 
    if (isLoading) {
        return <span>loading</span>
    }

  console.log(todos);
    return (
        <div className="lg:w-7/12 " >
            <PostTodo refetch={refetch}></PostTodo>

            <div className="gird grid-cols-1 gap-12">
            {
               ongoingTodos?.map((todo,index)=> <TodoCard refetch={refetch} todo={todo} key={index}></TodoCard> )
            }
            </div>

        </div>
    );
};

export default CreateTodo;