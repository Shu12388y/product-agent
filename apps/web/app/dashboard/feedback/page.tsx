import React from "react";
import { Button } from "@/components/ui/button";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Page() {
  const feedbacks = [
    {
      id: 1,
      name: "Sample 1",
      responses: 12,
    },
    {
      id: 2,
      name: "Sample 2",
      responses: 12,
    },
    {
      id: 3,
      name: "Sample 3",
      responses: 12,
    },
    {
      id: 4,
      name: "Sample 4",
      responses: 12,
    },
    {
      id: 5,
      name: "Sample 5",
      responses: 12,
    },
  ];
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-end p-4">
        <Dialog>
          <DialogTrigger>
            <Button>Create Feedback</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="px-10">
        <DataTable columns={columns} data={feedbacks} />
      </div>
    </div>
  );
}

export default Page;
