"use client";

import { Button, TextField } from "@radix-ui/themes";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewInventoryPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Name"></TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Inventory</Button>
    </div>
  );
};

export default NewInventoryPage;
