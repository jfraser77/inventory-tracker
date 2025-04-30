import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
const createInventorySchema = z.object({
  name: z.string().min(1, "Name is required.").max(255),
  description: z.string().min(1, "Description is required."),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createInventorySchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newInventory = await prisma.inventory.create({
    data: { name: body.name, description: body.description },
  });

  return NextResponse.json(newInventory, { status: 201 });
}
