import React from 'react';

const PostTodo = () => {
    return (
        <div >
            <textarea placeholder="Create Your Todo Now" className="textarea textarea-bordered textarea-md w-full " ></textarea>
            <div>
                <button className='btn btn-primary '>Create Todo</button>
            </div>
        </div>
    );
};

export default PostTodo;