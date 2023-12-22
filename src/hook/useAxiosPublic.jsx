import axios from 'axios';

export const instance= axios.create({
    baseURL:'http://localhost:5001',
    // baseURL:'https://todo-server-sepia.vercel.app'
})
const useAxiosPublic = () => {
    return  instance
};

export default useAxiosPublic;