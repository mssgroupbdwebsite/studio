
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "@/lib/products-data"
import { MoreHorizontal, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
        const product = row.original;
        return (
            <div className="flex items-center gap-2">
                {product.hidden && <EyeOff className="h-4 w-4 text-muted-foreground" title="This product is hidden" />}
                <span>{product.name}</span>
            </div>
        )
    }
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "segment",
    header: "Segment",
  },
  {
    accessorKey: "sourcingModel",
    header: "Sourcing Model",
     cell: ({ row }) => {
      const sourcingModel = row.getValue("sourcingModel") as string
      const variant = sourcingModel === 'Manufacturer' ? 'default' : 'secondary'
      return <Badge variant={variant}>{sourcingModel}</Badge>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="text-right">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>Edit</DropdownMenuItem>
                <DropdownMenuItem disabled>
                    Hide
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      )
    },
  },
]
