

const DragTodo = ({todo}) => {
    console.log(todo);

    return (
         <div className="card mb-8 bg-primary text-primary-content">
        <div className="card-body">

          <h2 className="card-title"> {todo?.title} </h2>
          <p> {todo?.desc} </p>
          <div className=" justify-end">
          <div className='flex justify-between'>
          <p> DeadLine: {todo?.deadLine} </p>
         <button className='btn'>  {todo?.status==='completed'?'completed':'complete'} </button>
          </div>
           <p>  </p>
          </div>
        </div>
      </div>
    );
};

export default DragTodo;