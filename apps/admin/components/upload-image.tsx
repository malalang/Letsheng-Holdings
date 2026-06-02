'use client';

import { createSupabaseBrowserClient } from '@repo/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useState, useRef, useEffect } from 'react';
import { Loader2, Pencil, Trash2, Upload } from 'lucide-react';
import Image from 'next/image';

interface UploadImageProps {
  onUploadSuccess: (url: string) => void;
  initialUrl?: string | null;
  folder?: string;
}

export function UploadImage({
  onUploadSuccess,
  initialUrl,
  folder,
}: UploadImageProps) {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(initialUrl || null);
  const supabase = createSupabaseBrowserClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync state with external changes to initialUrl
  useEffect(() => {
    setImageUrl(initialUrl || null);
  }, [initialUrl]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const bucketName = 'letshengHoldings';
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (uploadError) {
      toast.error(`Upload failed: ${uploadError.message}`);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);

    if (data.publicUrl) {
      setImageUrl(data.publicUrl);
      onUploadSuccess(data.publicUrl);
      toast.success('Image uploaded successfully!');
    } else {
      toast.error('Image uploaded, but failed to retrieve public URL.');
    }

    setUploading(false);
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    onUploadSuccess(''); // Notify parent form to clear the value
    toast.info('Image removed.');
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <Input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        disabled={uploading}
        accept="image/*"
        className="hidden"
      />

      {imageUrl ? (
        <div className="relative w-full max-w-lg overflow-hidden rounded-lg border aspect-video">
          <Image
            src={imageUrl}
            alt="Uploaded image preview"
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={triggerFileInput}
              disabled={uploading}
              aria-label="Change image"
            >
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Pencil className="h-4 w-4" />
              )}
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={handleRemoveImage}
              disabled={uploading}
              aria-label="Remove image"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="flex w-full max-w-lg justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-6 py-10 text-center cursor-pointer hover:border-primary/50 transition-colors"
          onClick={triggerFileInput}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="mx-auto h-10 w-10 text-muted-foreground animate-spin" />
              <p className="mt-2 text-sm font-medium text-primary">Uploading...</p>
              <p className="text-xs text-muted-foreground">Please wait.</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
              <span className="mt-2 font-medium text-primary">
                Click to upload an image
              </span>
              <p className="text-xs text-muted-foreground">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
