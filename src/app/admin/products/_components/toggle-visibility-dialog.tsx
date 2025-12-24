
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
import { toggleProductVisibility } from '../actions';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/lib/products-data';

interface ToggleVisibilityDialogProps {
    product: Pick<Product, 'id' | 'name' | 'hidden'>;
    children: React.ReactNode;
}

export function ToggleVisibilityDialog({ product, children }: ToggleVisibilityDialogProps) {
  const { toast } = useToast();

  const isHiding = !product.hidden;
  const actionText = isHiding ? "Hide" : "Show";
  const title = `${actionText} Product?`;
  const description = `This will ${isHiding ? 'hide the' : 'show the'} product "${product.name}" in the public catalog. It will not be deleted.`;
  const buttonText = `Yes, ${actionText} Product`;

  async function handleToggleVisibility() {
    const result = await toggleProductVisibility(product.id, isHiding);
    if (result.success) {
      toast({
        title: `Product visibility updated`,
        description: `"${product.name}" is now ${isHiding ? 'hidden' : 'visible'}.`,
      });
      // Full page reload to get new data
      window.location.reload();
    } else {
      toast({
        variant: "destructive",
        title: "Failed to update visibility",
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
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleToggleVisibility}
            className={isHiding ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-green-600 hover:bg-green-700 text-white"}>
            {buttonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
