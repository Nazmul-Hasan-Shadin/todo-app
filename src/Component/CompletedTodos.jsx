import React from 'react';
import useAllTodo from '../hook/useAllTodo';
import TodoCard from './TodoCard';

const CompletedTodos = () => {

    const {todos,isTodoLoading,todosRefetch}= useAllTodo()

    const ongoingTodos= todos?.filter(todo=> todo.status==='completed' )
    return (
  
        <div className="lg:w-7/12 " >
       
          <h3 className='text-4xl text-center'>Completd Todo  {ongoingTodos.length} </h3>

        <div className="gird grid-cols-1 lg:grid-cols-3 gap-12">
        {
           ongoingTodos?.map((todo,index)=> <TodoCard refetch={todosRefetch} todo={todo} key={index}></TodoCard> )
        }
        </div>

    </div>
    );
};

export default CompletedTodos;