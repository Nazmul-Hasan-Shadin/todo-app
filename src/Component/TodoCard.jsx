import React from 'react';
import useAxiosPublic from '../hook/useAxiosPublic';
import toast from 'react-hot-toast';
import { useDrag } from 'react-dnd';

const TodoCard = ({todo,refetch}) => {
   
  const [{isDragging},drag]= useDrag(()=>({
    type:"card",
    item:{id:todo}
    ,
    collect:(monitor)=>({
      isDragging: !!monitor.isDragging()
    })
  }))


    console.log(todo);
    const axiosPublic= useAxiosPublic()
    const handleUpdateStatus=async(id)=>{
         

       
       try {
         const res= await axiosPublic.patch(`/update-todo/${id}`,{status:'completed'})
          if (res.data.modifiedCount>0) {
              toast.success('Todo has Completed')
              refetch()
          }

       } catch (error) {
        console.log(error);
       }


    }

    return (
        <div ref={drag} className="card w-[400px] bg-primary mt-12 text-primary-content">
        <div className="card-body p-2 pl-7">

          <h2 className="card-title"> {todo?.title} </h2>
          <p> {todo?.desc} </p>
          <div className=" justify-end">
          <div className='flex justify-between'>
          <p> DeadLine: {todo?.deadLine} </p>
         <button onClick={()=>handleUpdateStatus(todo._id)} className='btn'>  {todo?.status==='completed'?'completed':'complete'} </button>
          </div>
           <p>  </p>
          </div>
        </div>
      </div>
    );
};

export default TodoCard;