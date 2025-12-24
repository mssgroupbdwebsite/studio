
"use client"

import { ColumnDef } from "@tanstack/react-table"
import type { ProductWithImage } from "@/lib/products-data"
import { MoreHorizontal, EyeOff, Eye, Edit, Trash2 } from "lucide-react"
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
import { ProductFormDialog } from './product-form-dialog';
import { ToggleVisibilityDialog } from "./toggle-visibility-dialog";
import { DeleteProductDialog } from "./delete-product-dialog"

export const columns: ColumnDef<ProductWithImage>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
        const product = row.original;
        return (
            <div className="flex items-center gap-2 font-medium">
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
      const product = row.original
      const isHiding = !product.hidden

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
                  <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                </ProductFormDialog>
                <ToggleVisibilityDialog product={product}>
                   <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full">
                    {isHiding ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {isHiding ? 'Hide' : 'Show'}
                  </button>
                </ToggleVisibilityDialog>
                 <DropdownMenuSeparator />
                <DeleteProductDialog product={product}>
                   <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full text-destructive">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </DeleteProductDialog>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      )
    },
  },
]
