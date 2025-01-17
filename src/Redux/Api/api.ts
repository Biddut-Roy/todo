import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      //   query: (priority) => ({
      //     url: `/tasks?priority=${priority}`,
      //     method: "GET",
      //   }),
      //   query: (priority) => ({
      //     url: `/tasks`,
      //     method: "GET",
      //     params: { priority },
      //   }),
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodos: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodos: builder.mutation({
      query: (option) => {
        return {
          url: `/task/${option.id}`,
          method: "PUT",
          body: option.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodos: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} = baseApi;
