
"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { UserRoleSelector } from "./user-role-selector"
import { Badge } from "@/components/ui/badge"
import { useUser } from "@/firebase"

export type UserData = {
  uid: string
  email: string
  role: "admin" | "user"
}

export function UserManagementTable({ users }: { users: UserData[] }) {
    const { user: currentUser } = useUser();

    const columns: ColumnDef<UserData>[] = [
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => {
            const role = row.getValue("role") as string
            const variant = role === 'admin' ? 'default' : 'secondary'
            return <Badge variant={variant} className="capitalize">{role}</Badge>
        },
    },
    {
        id: "actions",
        header: () => <div className="text-right">Actions</div>,
        cell: ({ row }) => {
            const user = row.original;
            // The first user in the list is the initial admin and cannot be changed.
            // Also, a user cannot change their own role.
            const isUnchangeable = users.indexOf(user) === 0 || user.uid === currentUser?.uid;

            return (
                <div className="text-right">
                    <UserRoleSelector 
                        userId={user.uid} 
                        currentRole={user.role} 
                        disabled={isUnchangeable}
                    />
                </div>
            )
        },
    },
    ]


  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
