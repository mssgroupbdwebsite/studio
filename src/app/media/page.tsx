
'use client';
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';

interface UploadResult {
  info: {
    public_id: string;
    width: number;
    height: number;
  };
}

export default function MediaPage() {
  const [resources, setResources] = useState<{ public_id: string }[]>([]);
  const { toast } = useToast();

  const handleUploadSuccess = (result: any) => {
    const newResource = result.info;
    setResources((prev) => [...prev, { public_id: newResource.public_id }]);
    toast({
      title: 'Upload Successful',
      description: `Image ${newResource.public_id} uploaded.`,
    });
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to Clipboard!',
      duration: 2000,
    });
  };

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset || cloudName === "<Your Cloud Name>") {
    return (
         <div className="container mx-auto py-10">
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Configuration Missing</CardTitle>
                    <CardDescription>
                        Please configure your Cloudinary credentials to use the Media Library.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="p-6 border-2 border-dashed rounded-lg text-center">
                        <p className="text-muted-foreground">
                            You need to add your Cloudinary Cloud Name and Upload Preset to your environment variables.
                        </p>
                        <p className="text-sm mt-2 text-muted-foreground/80">
                            Create a `.env.local` file and add the following:
                        </p>
                        <pre className="mt-4 p-4 rounded-md bg-muted text-sm text-left overflow-x-auto">
                            <code>
                                {`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="YOUR_CLOUD_NAME"\nNEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="YOUR_UPLOAD_PRESET"`}
                            </code>
                        </pre>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
                <CardTitle>Media Library</CardTitle>
                <CardDescription>Upload and manage your images.</CardDescription>
            </div>
            <CldUploadButton
              onSuccess={handleUploadSuccess}
              uploadPreset={uploadPreset}
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium"
            >
              Upload Image
            </CldUploadButton>
          </div>
        </CardHeader>
        <CardContent>
          {resources.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {resources.map((resource) => (
                <div key={resource.public_id} className="group relative">
                  <CldImage
                    width="400"
                    height="400"
                    src={resource.public_id}
                    sizes="50vw"
                    alt="Uploaded image"
                    className="rounded-lg object-cover aspect-square"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2">
                     <div className="relative w-full">
                        <Input
                            readOnly
                            value={`https://res.cloudinary.com/${cloudName}/image/upload/${resource.public_id}`}
                            className="text-xs pr-8"
                        />
                        <Button
                            size="icon"
                            variant="ghost"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                            onClick={() => copyToClipboard(`https://res.cloudinary.com/${cloudName}/image/upload/${resource.public_id}`)}
                        >
                            <Copy className="h-4 w-4" />
                        </Button>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
                <h3 className="text-lg font-semibold">No images uploaded</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Click the upload button to add images to your library.
                </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
