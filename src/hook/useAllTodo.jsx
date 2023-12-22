import React, { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAllTodo = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    data: todos = [],
    isLoading: isTodoLoading,
    refetch: todosRefetch,
  } = useQuery({
    queryKey: ["alltodos"],

    queryFn: async () => {
      const todos = await axiosPublic.get(`/get-todo/${user?.email}`);
      return todos.data;
    },
  });

  return { todos, todosRefetch, isTodoLoading };
};

export default useAllTodo;
