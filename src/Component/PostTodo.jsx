import { useForm } from "react-hook-form"
import React, { useContext } from 'react';
import useAxiosPublic from '../hook/useAxiosPublic';
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";



const PostTodo = ({refetch}) => {
    const {user}= useContext(AuthContext)
    const axiosPublix= useAxiosPublic()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
          console.log(data);
        const todos= {
            desc: data.todoDesc,
            email: user?.email,
            workLevel: data?.workLevel,
            deadLine: data?.deadLine,
            title: data?.title,
            status: 'ongoing'
        }

        axiosPublix.post('/create-todo',todos)
        .then(res=>{
           console.log(res);
           toast.success('Todo created Succesfull')
           refetch()
        })
        .catch(err=>{
           console.log(err);
        })
      }



    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <textarea name='todoDesc' {...register("todoDesc")} placeholder="Create Your Todo Now" className="textarea textarea-bordered textarea-md w-full " ></textarea>
             <label htmlFor="">Title</label>
             <input type="text" placeholder="Type here" {...register("title")} className="input input-bordered w-full " />
            


      <select {...register("workLevel")} className="select select-bordered w-full max-w-xs">
  <option disabled selected>Select Todo Level</option>
  <option>Hard</option>
  <option>Moderate </option>
  <option>Low</option>
</select>
         
           <input type="date" placeholder="Type here" {...register("deadLine")} className="input input-bordered w-full " />
                <button type='submit'  className='btn btn-primary '>Create Todo</button>
         
            </form>
        </div>
    );
};

export default PostTodo;