
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "@/lib/products-data"
import { MoreHorizontal } from "lucide-react"
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
import { ProductFormDialog } from "./product-form-dialog"
import { DeleteProductDialog } from "./delete-product-dialog"

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
      const product = row.original
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
                <ProductFormDialog product={product}>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
                </ProductFormDialog>
                <DeleteProductDialog productId={product.id}>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-600">
                        Delete
                    </DropdownMenuItem>
                </DeleteProductDialog>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      )
    },
  },
]
