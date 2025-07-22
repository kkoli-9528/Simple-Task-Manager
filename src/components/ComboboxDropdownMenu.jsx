"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ComboboxDropdownMenu({ handleStatus, id }) {
  const [open, setOpen] = React.useState(false)

  const status = [
    {
      id: 1,
      value: "In Progress"
    },
    {
      id: 2,
      value: "Completed"
    },
  ];

  const handleValues = (value) => {
    handleStatus(value, id)
  }

  return (
    <div className="sm:flex-row sm:items-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="cursor-pointer focus-visible:ring-0 focus-visible:border-transparent">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {status.map((state) => (
              <div key={state.id}>
                <DropdownMenuItem onClick={() => handleValues(state.value)}>{state.value}</DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
