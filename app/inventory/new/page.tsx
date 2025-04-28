"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface InventoryForm {
  name: string;
  description: string;
}

const NewInventoryPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<InventoryForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        axios.post("/api/inventory", data);
        router.push("/inventory");
      })}
    >
      <TextField.Root placeholder="Name" {...register("name")}></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit New Inventory</Button>
    </form>
  );
};

export default NewInventoryPage;
