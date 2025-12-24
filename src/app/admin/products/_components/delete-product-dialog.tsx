
"use client"

import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteProduct } from '../actions';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/app/admin/products/actions';
import { useRouter } from 'next/navigation';

interface DeleteProductDialogProps {
    product: Pick<Product, 'id' | 'name'>;
    children: React.ReactNode;
}

export function DeleteProductDialog({ product, children }: DeleteProductDialogProps) {
  const { toast } = useToast();
  const router = useRouter();

  async function handleDelete() {
    const result = await deleteProduct(product.id);
    if (result.success) {
      toast({
        title: `Product Deleted`,
        description: `"${product.name}" has been permanently deleted.`,
      });
      router.refresh();
    } else {
      toast({
        variant: "destructive",
        title: "Failed to delete product",
        description: result.error || "An error occurred. Please try again.",
      });
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this product?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the product "{product.name}".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDelete}
            className="bg-destructive hover:bg-destructive/90">
            Yes, Delete Product
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
