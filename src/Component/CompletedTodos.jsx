import React from 'react';
import useAllTodo from '../hook/useAllTodo';
import TodoCard from './TodoCard';

const CompletedTodos = () => {

    const {todos,isTodoLoading,todosRefetch}= useAllTodo()

    const ongoingTodos= todos?.filter(todo=> todo.status==='completed' )
    return (
  
        <div className="lg:w-7/12 " >
     

        <div className="gird grid-cols-1 gap-12">
        {
           ongoingTodos?.map((todo,index)=> <TodoCard refetch={todosRefetch} todo={todo} key={index}></TodoCard> )
        }
        </div>

    </div>
    );
};

export default CompletedTodos;