import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  createInventory,
  deleteInventory,
  updateInventory,
  getInventory,
} from "../api/Inventory.API";

export function InventoryFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmitFcn = handleSubmit(async (data) => {
    if (params.id) {
      await updateInventory(params.id, data);
      toast.success(`Inventario actualizado: ${data.name}`, {
        position: "bottom-center",
        style: {
          background: "#303030",
          color: "white",
        },
      });
    } else {
      await createInventory(data);
      toast.success(`Inventario Creado: ${data.name}`, {
        position: "bottom-center",
        style: {
          background: "#303030",
          color: "white",
        },
      });
    }
    navigate("/inventory");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getInventory(params.id);
        setValue("code", res.data.code);
        setValue("name", res.data.name);
        setValue("description", res.data.description);
        setValue("calib_now", res.data.calib_now);
        setValue("calib_next", res.data.calib_next);
        setValue("name_inspect_1", res.data.name_inspect_1);
        setValue("name_inspect_2", res.data.name_inspect_2);
      }
    }
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmitFcn}>
        <input
          type="text"
          placeholder="Code"
          {...register("code", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.name && <span>this field is required</span>}
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.name && <span>this field is required</span>}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        <input
          type="date"
          placeholder="Calib Now"
          {...register("calib_now", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></input>
        {errors.calib_now && <span>this field is required</span>}
        <input
          type="date"
          placeholder="Calib Next"
          {...register("calib_next", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></input>
        {errors.calib_next && <span>this field is required</span>}
        <input
          type="text"
          placeholder="Name inspect 1"
          {...register("name_inspect_1", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></input>
        {errors.name_inspect_1 && <span>this field is required</span>}
        <input
          type="text"
          placeholder="Name inspect 2"
          {...register("name_inspect_2", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></input>
        {errors.name_inspect_2 && <span>this field is required</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                await deleteInventory(params.id);
                toast.success("Inventario Eliminado", {
                  position: "bottom-center",
                  style: {
                    background: "#303030",
                    color: "white",
                  },
                });
                navigate("/inventory");
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
