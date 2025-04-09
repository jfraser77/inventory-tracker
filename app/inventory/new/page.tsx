"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewInventoryPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Name"></TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Inventory</Button>
    </div>
  );
};

export default NewInventoryPage;
