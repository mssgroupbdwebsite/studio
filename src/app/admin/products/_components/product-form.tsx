"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addProduct, updateProduct, ProductFormValues } from "../actions";
import { productCategories, productSegments } from "@/config/products";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2, UploadCloud } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import type { ProductWithImage } from '../actions';
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const productSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    category: z.enum(productCategories),
    segment: z.enum(productSegments),
    sourcingModel: z.enum(['Manufacturer', 'Trading Partner']),
    imageUrl: z.string().min(1, "Image is required").url("Must be a valid URL"),
    description: z.string().min(1, "Description is required"),
});

interface ProductFormProps {
  product?: ProductWithImage;
  onSuccess?: () => void;
}

export function ProductForm({ product, onSuccess }: ProductFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: product ? {
      ...product,
    } : {
      name: "",
      category: "Knitwear",
      segment: "Menswear",
      sourcingModel: "Manufacturer",
      imageUrl: "",
      description: "",
    },
  });

  const isEditing = !!product;

  async function onSubmit(data: ProductFormValues) {
    const action = isEditing ? updateProduct : addProduct;
    // Add the product ID for updates
    const payload = isEditing ? { ...data, id: product.id } : data;
    const result = await action(payload);

    if (result.success) {
      toast({
        title: `Product ${isEditing ? 'updated' : 'added'} successfully`,
        description: `"${data.name}" has been saved.`,
      });
      onSuccess?.();
      // Revalidate path is called in server action, router.refresh() will refetch data
      router.refresh();
    } else {
      toast({
        variant: "destructive",
        title: `Failed to ${isEditing ? 'update' : 'add'} product`,
        description: result.error || "An error occurred. Please try again.",
      });
    }
  }
  
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Men's Knit Polo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the product..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Product Image</FormLabel>
                 <FormControl>
                    <CldUploadWidget
                        uploadPreset={uploadPreset}
                        onSuccess={(result: any) => {
                            if (result.event === 'success') {
                                form.setValue('imageUrl', result.info.secure_url, { shouldValidate: true });
                                toast({
                                    title: "Image Uploaded",
                                    description: "The image URL has been set.",
                                });
                            }
                        }}
                        options={{
                            sources: ['local'],
                            multiple: false,
                            cropping: false,
                            folder: 'mss-group-products',
                            clientAllowedFormats: ['png', 'jpeg', 'jpg', 'webp'],
                        }}
                    >
                        {({ open }) => (
                            <div>
                                {field.value ? (
                                     <div className="relative aspect-video rounded-md overflow-hidden cursor-pointer" onClick={() => open()}>
                                        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <p className="text-white text-sm font-semibold">Click to change image</p>
                                        </div>
                                        <Image src={field.value} alt="Uploaded product image" fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div 
                                        onClick={() => open()}
                                        className="flex flex-col items-center justify-center gap-2 p-8 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent hover:border-primary transition-colors aspect-video"
                                    >
                                        <UploadCloud className="w-12 h-12 text-muted-foreground" />
                                        <p className="text-center font-semibold text-muted-foreground">
                                            Add Image
                                        </p>
                                        <p className="text-xs text-muted-foreground">Click to browse or drag & drop</p>
                                    </div>
                                )}
                                {/* Hidden input to hold the value for the form and validation */}
                                <Input type="hidden" {...field} />
                            </div>
                        )}
                    </CldUploadWidget>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />

        <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {productCategories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="segment"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Segment</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a segment" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {productSegments.map(seg => <SelectItem key={seg} value={seg}>{seg}</SelectItem>)}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
            control={form.control}
            name="sourcingModel"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Sourcing Model</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a sourcing model" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="Manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="Trading Partner">Trading Partner</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
            {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isEditing ? "Save Changes" : "Add Product"}
        </Button>
      </form>
    </Form>
  );
}
