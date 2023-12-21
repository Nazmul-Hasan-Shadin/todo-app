import React from 'react';
import useAxiosPublic from '../hook/useAxiosPublic';

const TodoCard = ({todo}) => {
    console.log(todo);
    const axiosPublic= useAxiosPublic()
    const handleUpdateStatus=(id)=>{
         

        axiosPublic.patch(`/update-todo/${id}`)


    }

    return (
        <div className="card mb-8 bg-primary text-primary-content">
        <div className="card-body">

          <h2 className="card-title"> {todo?.title} </h2>
          <p> {todo?.desc} </p>
          <div className=" justify-end">
          <div className='flex justify-between'>
          <p> DeadLine: {todo?.deadLine} </p>
         <button onClick={()=>handleUpdateStatus(todo._id)} className='btn'>Complet</button>
          </div>
           <p>  </p>
          </div>
        </div>
      </div>
    );
};

export default TodoCard;