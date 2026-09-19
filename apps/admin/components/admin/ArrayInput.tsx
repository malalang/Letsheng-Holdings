"use client";

import { PlusCircle, Trash2 } from "lucide-react";
import {
  type Control,
  type FieldArrayPath,
  type FieldPath,
  type FieldValues,
  useFieldArray,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ArrayInputProps<
  TFieldValues extends FieldValues,
  TTransformedValues = TFieldValues,
> {
  control: Control<TFieldValues, any, TTransformedValues>;
  name: string;
  label: string;
  addLabel?: string;
  placeholder?: string;
  emptyLabel?: string;
  className?: string;
}

export function ArrayInput<
  TFieldValues extends FieldValues,
  TTransformedValues = TFieldValues,
>({
  control,
  name,
  label,
  addLabel = "Add item",
  placeholder,
  emptyLabel = "No items added yet.",
  className,
}: ArrayInputProps<TFieldValues, TTransformedValues>) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name as FieldArrayPath<TFieldValues>,
  });

  return (
    <div className={cn("space-y-3", className)}>
      <div className="text-sm font-medium leading-none">{label}</div>
      <div className="space-y-3">
        {fields.map((item, index) => (
          <FormField
            key={item.id}
            control={
              control as unknown as Control<TFieldValues, any, TFieldValues>
            }
            name={`${name}.${index}` as FieldPath<TFieldValues>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">
                  {label} {index + 1}
                </FormLabel>
                <div className="flex items-start gap-2">
                  <div className="flex-1 space-y-2">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={placeholder}
                        value={
                          typeof field.value === "string" ? field.value : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-muted-foreground hover:text-destructive"
                    aria-label={`Remove ${label.toLowerCase()} ${index + 1}`}
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>
      {fields.length === 0 && (
        <p className="text-sm text-muted-foreground">{emptyLabel}</p>
      )}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => append("" as never)}
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        {addLabel}
      </Button>
    </div>
  );
}
