"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface InventoryForm {
  name: string;
  description: string;
}

const NewInventoryPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<InventoryForm>();
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/inventory", data);
            router.push("/inventory");
          } catch (error) {
            if (axios.isAxiosError(error)) {
              setError(
                error.response?.data?.message || "An unexpected error occurred."
              );
            } else {
              setError("An unexpected error occurred.");
            }
          }
        })}
      >
        <TextField.Root
          placeholder="Name"
          {...register("name")}
        ></TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>Submit New Inventory</Button>
      </form>
    </div>
  );
};

export default NewInventoryPage;
