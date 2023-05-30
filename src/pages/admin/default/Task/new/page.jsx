"use client";
import { useEffect } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const TaskFormPage = ({ params }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { createTask, updateTask, tasks } = useTasks();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    if (!params.id) {
      createTask(data.title, data.description);
      toast.success("Tarea creada con éxito");
    } else {
      updateTask(params.id, data);
      toast.success("Tarea actualizada correctamente");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form className="bg-gray-700 p-10" onSubmit={onSubmit}>
        <h1 className="text-3xl mb-3">
          {params.id ? "Edit Task" : "New Task"}
        </h1>
        <input
          type="text"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-2 block"
          placeholder="Write a title"
          autoFocus
          name="title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="block text-red-400 mb-2">
            Este campo es requerido
          </span>
        )}

        <textarea
          cols="2"
          placeholder="Write a Description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-1 block"
          name="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="block text-red-400 mb-2">
            Este campo es requerido
          </span>
        )}

        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TaskFormPage;
